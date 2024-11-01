import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  if (userService.current_user) {
    return true;
  }
  window.alert('Please login to your account');
  router.navigate(['/auth/signin']);
  return false;
};
