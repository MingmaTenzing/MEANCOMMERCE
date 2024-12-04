import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BackendService } from '../../../../../services/backend/backend.service';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent implements OnDestroy {
  $destroy = new Subject<void>();
  token: string = '';
  signinLoading: boolean = false;

  constructor(
    private backend_service: BackendService,
    private router: Router // private messageService: MessageService,
  ) {}
  signinForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  sign_in_user() {
    this.signinLoading = true;
    console.log(this.signinForm.value);
    this.backend_service
      .signInUser(this.signinForm)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (user) => {
          if (user) {
            this.router.navigate(['/dashboard']);
            this.signinLoading = false;
          }
        },
        error: (error: HttpErrorResponse) => {
          window.alert(error.error);
          this.signinLoading = false;
        },
      });
    // .subscribe((user) => {
    //   if (user) {
    //     console.log(user);
    //     this.router.navigate(['/dashboard']);
    //   }
    // });
  }

  google_login() {
    console.log('ldf');
    this.backend_service.googleAuth().subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
