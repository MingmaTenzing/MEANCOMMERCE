import { Injectable } from '@angular/core';
import { auth_session } from '../../types';
import { BackendService } from '../backend/backend.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  current_user: auth_session | null = null;

  constructor(private backend: BackendService) {}

  is_loggedIn() {
    this.backend
      .check_session()
      .subscribe((data) => (this.current_user = data));
    console.log(this.current_user);
  }
}
