import { AuthService } from '@/app/services/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const { authUser } = inject(AuthService);
  const isLogin = route.url[0]?.path === 'login';

  if (isLogin) {
    if (authUser()) {
      return router.navigate(['/'], {
        replaceUrl: true,
      });
    }

    const userLs = localStorage.getItem('user');
    if (userLs) {
      const user = JSON.parse(userLs);
      authUser.set(user);

      return router.navigate(['/'], {
        replaceUrl: true,
      });
    }

    return true;
  }

  if (authUser()) {
    if (isLogin) {
      return router.navigate(['/'], {
        replaceUrl: true,
      });
    }

    return true;
  }

  const userLs = localStorage.getItem('user');
  if (userLs) {
    if (isLogin) {
      return router.navigate(['/'], {
        replaceUrl: true,
      });
    }

    const user = JSON.parse(userLs);
    authUser.set(user);

    return true;
  }

  return router.navigate(['/login'], {
    replaceUrl: true,
  });
};
