import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BackendService } from '../../../../../services/backend/backend.service';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../../../../../services/user/user.service';
import { Router } from '@angular/router';

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

  constructor(
    private backend_service: BackendService,
    private router: Router
  ) {}
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
        next: (user) => {
          if (user) {
            this.router.navigate(['/dashboard']);
          }
        },
        error: (error: HttpErrorResponse) => console.log(error.error),
      });
    // .subscribe((user) => {
    //   if (user) {
    //     console.log(user);
    //     this.router.navigate(['/dashboard']);
    //   }
    // });
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
