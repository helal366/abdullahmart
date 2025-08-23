import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

  // Public pages
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/api/auth")
  ) {
    return NextResponse.next();
  }

  // Protect dashboards
  if (pathname.startsWith("/dashboard")) {
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Redirect base /dashboard depending on role
  if (pathname === "/dashboard") {
    if (token.role?.toLowerCase() === "admin") {
      return NextResponse.redirect(new URL("/dashboard/dashboard-admin", req.url));
    }
    if (token.role?.toLowerCase() === "user") {
      return NextResponse.redirect(new URL("/dashboard/dashboard-user", req.url));
    }
  }

  // Allow access if role matches sub-route
  if (token.role?.toLowerCase() === "admin" && pathname.startsWith("/dashboard/dashboard-admin")) {
    return NextResponse.next();
  }
  if (token.role?.toLowerCase() === "user" && pathname.startsWith("/dashboard/dashboard-user")) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/unauthorized", req.url));
}


  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};



