import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export default async function middleware(req: NextRequest) {
  const protectedRoutes = ["/onboard"];
  const currentPath = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) =>
    currentPath.includes(route),
  );

  if (isProtectedRoute && cookies().has("token")) {
    return NextResponse.redirect(new URL("/onboard", req.url));
  }

  return NextResponse.next();
}
