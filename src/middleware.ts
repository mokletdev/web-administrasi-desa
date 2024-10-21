import { withAuth } from "next-auth/middleware";

// middleware is applied to all routes, use conditionals to select
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default withAuth(function middleware(_) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      // const pathname = req.nextUrl.pathname;
      // if (
      //   (pathname.startsWith("/rooms/book") ||
      //     pathname.startsWith("/admin") ||
      //     pathname.startsWith("/receptionist") ||
      //     pathname.startsWith("/bookings")) &&
      //   !token
      // ) {
      //   return false;
      // }

      // if (pathname.startsWith("/auth") && token) {
      //   return false;
      // }

      return true;
    },
  },
});

export const config = {
  matcher: [
    "/about/:path*",
    "/dashboard/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",

    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
      has: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
      has: [{ type: "header", key: "x-present" }],
      missing: [{ type: "header", key: "x-missing", value: "prefetch" }],
    },
  ],
};
