import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const isAuthenticateGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.authStatus() === AuthStatus.authenticated) {
    return true;
  }

  if(authService.authStatus() === AuthStatus.checking) {
    return false;
  }

  router.navigateByUrl('/auth/login');

  return false;
};
