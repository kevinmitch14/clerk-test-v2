import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
  signInUrl: "/random",
  publicRoutes: ["/random"],
  afterAuth(auth, req) {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn();
    }
  },

});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
