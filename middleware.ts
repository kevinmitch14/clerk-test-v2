import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  secretKey: "SECRET_KEY",
  publishableKey: "PUB_KEY",
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
