import { Injectable, OnDestroy } from '@angular/core';
import { auth_session } from '../../types';
import { BackendService } from '../backend/backend.service';
import { Subject, take, takeUntil } from 'rxjs';
import { error } from 'console';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  destroy$ = new Subject<void>();
  current_user: auth_session | null = null;

  constructor(private backend: BackendService) {}

  check_auth_session() {
    this.backend
      .check_session()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.current_user = data;
        },
        error: (error) => {
          console.error(error);
        },
      });
    return this.current_user;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
