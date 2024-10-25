import { Injectable, OnDestroy } from '@angular/core';
import { auth_session } from '../../types';
import { BackendService } from '../backend/backend.service';
import { Subject, take, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  destroy$ = new Subject<void>();
  current_user: auth_session | null = null;

  constructor(private backend: BackendService) {
    this.backend
      .check_session()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => (this.current_user = data));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
