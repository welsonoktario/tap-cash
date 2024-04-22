import { AuthService } from '@/app/services/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const isLoginRoute = route.url[0]?.path === 'login';

  const isAuthenticated =
    authService.authUser() || !!localStorage.getItem('user');

  if (isLoginRoute) {
    if (isAuthenticated) {
      authService.authUser.set(JSON.parse(localStorage.getItem('user')!));

      return router.navigate(['/'], { replaceUrl: true });
    }
    return true;
  }

  if (isAuthenticated) {
    authService.authUser.set(JSON.parse(localStorage.getItem('user')!));

    return true;
  }

  return router.navigate(['/login'], { replaceUrl: true });
};
