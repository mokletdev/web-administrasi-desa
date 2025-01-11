import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { encode } from "next-auth/jwt";
import { JwtPayload, verify as jwtVerify } from "jsonwebtoken";
import prisma from "@/lib/prisma";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const token = searchParams.get("token")?.toString();
    const cookieStore = await cookies();

    if (token === undefined)
      return NextResponse.json(
        { status: 400, message: "Bad Request" },
        { status: 400 },
      );

    if (
      process.env.SSO_SECRET === undefined ||
      process.env.NEXTAUTH_SECRET === undefined
    )
      return NextResponse.json(
        { status: 500, message: "Invalid Key on Server" },
        { status: 500 },
      );

    const decoded = jwtVerify(token, process.env.SSO_SECRET) as JwtPayload;

    const user = await prisma.user.findUnique({
      where: { email: decoded.email },
    });
    if (!user)
      return NextResponse.json(
        { status: 400, message: "User is Unregistered" },
        { status: 400 },
      );

    const jwtPayload = {
      id: user.id,
      role: user.role,
      name: user.name,
      email: user.email,
    };
    const jwt = await encode({
      secret: process.env.NEXTAUTH_SECRET,
      token: jwtPayload,
    });
    cookieStore.set("next-auth.session-token", jwt);
    cookieStore.set("__Secure-next-auth.session-token", jwt);

    const homeUrl = new URL("/", process.env.NEXTAUTH_URL ?? req.url);
    return NextResponse.redirect(homeUrl, {
      headers: { "Set-Cookie": cookieStore.toString() },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { status: 400, message: "Invalid" },
      { status: 400 },
    );
  }
};

export const revalidate = 0;
