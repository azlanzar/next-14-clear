import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Utility function to decode a JWT without verification
function decodeJWT(token: string) {
  try {
    const base64Payload = token.split(".")[1]; // Get the payload part
    const payload = Buffer.from(base64Payload, "base64").toString("utf-8");
    return JSON.parse(payload); // Parse the payload as JSON
  } catch (error) {
    console.error("Invalid token format:", error);
    return null;
  }
}

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;
  const { pathname } = req.nextUrl.clone();

  const publicRoutes = ["/login"];
  // If Logged In
  if (token) {
    const decoded = decodeJWT(token);
    if (decoded && decoded.exp) {
      const isExpired = decoded.exp * 1000 < Date.now(); // Convert exp to milliseconds
      if (isExpired) {
        const response = NextResponse.redirect(new URL("/login", req.url));
        response.cookies.delete("accessToken");
        return response;
      }
    }
    if (decoded?.role !== "admin" && pathname.includes("/users")) {
      return NextResponse.redirect(new URL("/analytics", req.url));
    }
    // redirect from root path to dashboard
    if (pathname === `/` || publicRoutes.includes(pathname))
      return NextResponse.redirect(new URL("/analytics", req.url));
  } else if (!token) {
    if (pathname === "/")
      return NextResponse.redirect(new URL("/login", req.url));
    if (publicRoutes.includes(pathname)) return NextResponse.next();
    if (!publicRoutes.includes(pathname))
      return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|static|favicon.ico|assets|favicon|manifest.json|_next).*)",
  ],
};
