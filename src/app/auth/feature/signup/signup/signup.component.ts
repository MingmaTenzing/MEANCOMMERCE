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
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnDestroy {
  private $destroy = new Subject<void>();
  constructor(private backend: BackendService) {}
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
      .subscribe((data) => console.log(data));
    // this.backend.check_session().subscribe((data) => console.log(data));
  }
  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
