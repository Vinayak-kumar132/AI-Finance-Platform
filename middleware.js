import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";

// in this we have to mention the route which would be protected
const isProtectedRoute=createRouteMatcher([
  "/dashboard(.*)", // whatever comes after dashboard (.*) it is wildcard pattern
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
])


export default clerkMiddleware(async(auth,req)=>{
  const {userId}= await auth();

  if(!userId && isProtectedRoute){
    const {redirectToSignIn}= await auth();
    return redirectToSignIn();
  }

});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};