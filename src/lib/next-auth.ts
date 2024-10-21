import {
  AuthOptions,
  getServerSession as nextAuthGetServerSession,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { compareHash } from "@/utils/encryption";

import type { DefaultJWT } from "next-auth/jwt";

import prisma from "./prisma";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      // TODO: Change this to the actual role of user in your app
      role: "GUEST" | "ADMIN";
      name: string;
      email: string;
    };
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    id: string;
    // TODO: Change this to the actual role of user in your app
    role: "GUEST" | "ADMIN";
    name: string;
    email: string;
  }
}

// TODO: Change the logic of authentication according to your app needs
export const authOptions: AuthOptions = {
  theme: {
    colorScheme: "dark",
    brandColor: "#E04E4E",
    logo: "/logo.png",
  },
  session: {
    strategy: "jwt",
  },
  pages: { signIn: "/auth/login" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "user@student.smktelkom-mlg.sch.id",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials?.email },
          });
          if (!user?.password) return null;

          const isPasswordCorrect = compareHash(
            credentials?.password as string,
            user.password
          );

          if (!isPasswordCorrect) return null;

          const userPayload = {
            id: user.id,
            role: user.role,
            name: user.name,
            email: user.email,
          };

          return userPayload;
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //   allowDangerousEmailAccountLinking: false,
    // }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      const redirectUrl = url.startsWith("/")
        ? new URL(url, baseUrl).toString()
        : url;
      return redirectUrl;
    },
    async signIn({ user }) {
      if (user.email) {
        const findUser = await prisma.user.findUnique({
          where: { email: user.email },
        });
        if (!findUser) {
          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name || "",
              verified: true,
            },
          });
        }
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user?.email) {
        const findUser = await prisma.user.findUnique({
          where: { email: user.email },
        });
        if (!findUser) return token;
        token.id = findUser?.id;
        token.role = findUser?.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.id && session.user) {
        const findUser = await prisma.user.findUnique({
          where: { id: token.id },
        });
        session.user.role = findUser?.role || "GUEST";
        session.user.name = findUser?.name as string;
        session.user.email = findUser?.email as string;
        session.user.id = findUser?.id as string;
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const getServerSession = () => nextAuthGetServerSession(authOptions);
