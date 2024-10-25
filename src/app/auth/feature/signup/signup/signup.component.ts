import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BackendService } from '../../../../../services/backend/backend.service';
import { catchError, Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnDestroy {
  private $destroy = new Subject<void>();
  constructor(private backend: BackendService, private router: Router) {}
  signup_form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    user_name: new FormControl('', [Validators.required]),
    profile_image: new FormControl('', [Validators.required]),
  });

  user_signup() {
    this.backend
      .signup_user(this.signup_form)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (data) => {
          if (data) {
            this.router.navigate(['/dashboard']);
          }
        },
        error: (e) => console.log(e.message),
      });
    // .subscribe({next: data => {
    //   if (data) {
    //     this.router.navigate(['/dashboard']);
    //   }
    // }
    // },
    // error: e => console.log(e))
    // this.backend.check_session().subscribe((data) => console.log(data));
  }
  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
