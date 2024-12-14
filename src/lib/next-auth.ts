import {
  AuthOptions,
  getServerSession as nextAuthGetServerSession,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { compareHash } from "@/lib/bcryptjs";

import type { DefaultJWT } from "next-auth/jwt";

import prisma from "./prisma";

import { UserRole } from "@prisma/client";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      role: UserRole;
      name: string;
      email: string;
    };
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    id: string;
    role: UserRole;
    name: string;
    email: string;
  }
}

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: { signIn: "/auth/login" },
  useSecureCookies: false,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "user@email.com",
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
            user.password,
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
          throw new Error(`User with email ${user.email} not found`);
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
        token.name = findUser?.name;
        token.email = findUser?.email;
      }

      return token;
    },
    async session({ session, token }) {
      if (token.id && session.user) {
        const findUser = await prisma.user.findUnique({
          where: { id: token.id },
        });

        session.user.role = findUser?.role as UserRole;
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
