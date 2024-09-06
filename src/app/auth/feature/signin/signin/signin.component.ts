import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BackendService } from '../../../../../services/backend/backend.service';
import { Subject, takeUntil } from 'rxjs';
import { token } from '../../../auth_types';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent implements OnDestroy {
  $destroy = new Subject<void>();
  token: string = '';

  constructor(private backend_service: BackendService) {}
  signinForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  sign_in_user() {
    console.log(this.signinForm.value);
    this.backend_service
      .signInUser(this.signinForm)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (data) => {
          (this.token = data.token), console.log(this.token);
        },
        error: (e: HttpErrorResponse) => {
          window.alert(e.error.message);
        },
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
