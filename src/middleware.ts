import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const publicRoutes = ["/login", "/register"];
  const currentUser = request.cookies.get("auth")?.value;

  const isPublic = publicRoutes.find((path) =>
    request.nextUrl.pathname.startsWith(path)
  );
  if (!currentUser && !isPublic) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
