import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BackendService } from '../../services/backend/backend.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const backendService = inject(BackendService);
  const router = inject(Router);

  return backendService.check_session().pipe(
    map((data) => {
      if (!data.userId) {
        return false;
      } else {
        return true;
      }
    })
  );
};
