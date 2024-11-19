export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/accounts/:path*",
    "/liabilities/:path*",
    "/analytics/:path*",
    "/settings/:path*",
  ],
}