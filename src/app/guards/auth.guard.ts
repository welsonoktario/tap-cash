import { AuthService } from "@/app/services/auth.service";
import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const isLoginRoute = route.url[0]?.path === "login";

  const hasToken = authService.token() || !!localStorage.getItem("token");

  if (isLoginRoute) {
    if (hasToken) {
      authService.token.set(localStorage.getItem("token")!);

      return router.navigate(["/"], { replaceUrl: true });
    }
    return true;
  }

  if (hasToken) {
    authService.token.set(localStorage.getItem("token")!);

    return true;
  }

  return router.navigate(["/login"], { replaceUrl: true });
};
