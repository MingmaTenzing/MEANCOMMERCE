import { Injectable } from '@angular/core';
import { User } from '../../types';
import { BackendService } from '../backend/backend.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  current_user: User | null = null;

  constructor(private backend: BackendService) {}

  is_loggedIn() {
    this.backend
      .check_session()
      .subscribe((data) => (this.current_user = data));
    console.log(this.current_user);
  }
}
