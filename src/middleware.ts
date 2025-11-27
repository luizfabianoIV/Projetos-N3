import { clerkMiddleware, createRouteMatcher} from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  "/",
  "/product(.*)", 
  "/sign-in", 
  "/sign-up",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    return; // rota pública → deixa passar
  }

  // rota privada → exige que o usuário esteja logado
  const { userId } = await auth();
  if (!userId) {
    // redireciona para o login se não estiver autenticado
    return Response.redirect(new URL("/sign-in", req.url));
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/"],
}