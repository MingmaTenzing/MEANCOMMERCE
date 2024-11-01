import { Injectable, OnDestroy } from '@angular/core';
import { auth_session, user } from '../../types';
import { BackendService } from '../backend/backend.service';
import { Subject, take, takeUntil } from 'rxjs';
import { error } from 'console';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  destroy$ = new Subject<void>();
  current_user: auth_session = {
    message: {
      userId: '',
      userName: '',
    },
  };

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

  set_user(details: user) {
    this.current_user!.message.userId = details._id;
    this.current_user!.message.userName = details.user_name;
  }

  log_out_user() {
    this.current_user.message.userId = '';
    this.current_user.message.userName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
