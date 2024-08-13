import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RouteAuthService } from '../services/routeAuth/route-auth.service';

export const checkoutGaurdGuard: CanActivateFn = (route, state) => {
  const routeService = inject(RouteAuthService);
  const router = inject(Router);

  if (routeService.isAllowed() === true) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
