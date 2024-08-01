/** @format */

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const user = JSON.parse(cookies().get("user")?.value || "{}") as IUser;

  const { pathname } = request.nextUrl;
  if (user.id && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register"],
};
