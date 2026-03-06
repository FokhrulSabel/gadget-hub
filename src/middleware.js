import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

  // Protect dashboard
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Admin-only protection
  // if (
  //   pathname.startsWith("/dashboard/manage-products") ||
  //   pathname.startsWith("/dashboard/add-product")
  // ) {
  //   if (!token || token.role !== "admin") {
  //     return NextResponse.redirect(new URL("/", req.url));
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
