import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { UserRole } from "@prisma/client";

const ROUTES = {
  ROOT: "/",
  LOGIN: "/auth/login",
  ADMIN: "/admin",
  UNAUTHORIZED: "/unauthorized",
} as const;

type ProtectedRouteConfig = {
  path: string;
  roles: UserRole[];
};

const PROTECTED_ROUTES: ProtectedRouteConfig[] = [
  {
    path: "/admin",
    roles: ["SUPERADMIN", "CITY_ADMIN", "DISTRICT_ADMIN", "SUBDISTRICT_ADMIN"],
  },
  {
    path: "/dashboard",
    roles: ["CITIZEN", "CITY_ADMIN", "DISTRICT_ADMIN", "SUBDISTRICT_ADMIN"],
  },
];

export default withAuth(
  async function middleware(req) {
    const { token } = req.nextauth;
    const { pathname } = req.nextUrl;

    if (pathname === ROUTES.LOGIN || pathname === ROUTES.ROOT) {
      if (!token) return NextResponse.next();
      if (token.role === "SUPERADMIN") {
        return NextResponse.redirect(new URL(ROUTES.ADMIN, req.url));
      }
    }

    if (!token) {
      return NextResponse.redirect(
        new URL(`${ROUTES.LOGIN}?callbackUrl=${pathname}`, req.url),
      );
    }

    const isRouteProtected = PROTECTED_ROUTES.some(
      (route) =>
        pathname.startsWith(route.path) && !route.roles.includes(token.role),
    );

    if (isRouteProtected) {
      return NextResponse.rewrite(new URL(ROUTES.UNAUTHORIZED, req.url), {
        status: 403,
      });
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true,
    },
  },
);

export const config = {
  matcher: ["/", "/admin/:path*", "/auth/login", "/dashboard/:path*"],
};
