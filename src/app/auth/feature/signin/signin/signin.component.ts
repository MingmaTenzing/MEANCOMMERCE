import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BackendService } from '../../../../../services/backend/backend.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  constructor(private backend_service: BackendService) {}
  signinForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  sign_in_user() {
    console.log(this.signinForm.value);
    this.backend_service.signInUser(this.signinForm);
  }
}
