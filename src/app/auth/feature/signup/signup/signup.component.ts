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
import { ProgressBarComponent } from '../../../components/loading/progress-bar/progress-bar.component';

@Component({
    selector: 'app-signup',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProgressBarComponent,
    ],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css'
})
export class SignupComponent implements OnDestroy {
  private $destroy = new Subject<void>();
  image_uploading: boolean = false;
  uploadingImageCompleted: boolean = false;
  img!: any;
  name: string = '';
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
        error: (e) => {
          console.log(e);
        },
      });
  }

  uploadImage($event: Event) {
    this.image_uploading = true;
    let file = (<HTMLInputElement>$event.target).files![0];
    console.log(file);

    this.backend
      .upload_profile_image(file)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (data) => {
          if (data) {
            this.signup_form.patchValue({ profile_image: data.image });
            console.log(this.signup_form.value.profile_image);
            this.image_uploading = false;
            this.uploadingImageCompleted = true;
          }
        },
        error: (error) => {
          console.log(error);
          this.image_uploading = false;
        },
      });
  }
  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
