import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-upload-products',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './upload-products.component.html',
  styleUrl: './upload-products.component.css',
})
export class UploadProductsComponent {
  constructor(private http: HttpClient) {}

  title = 'Upload products';
  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    featured: new FormControl(Boolean),
    description: new FormControl(''),
    rating: new FormControl(Number),
    stock: new FormControl(Number),
    brand: new FormControl(''),
    images: new FormControl<String[] | null>(null),
  });

  formSubmit() {
    this.http
      .post('http://localhost:5000/api/v1/products', this.productForm.value)
      .subscribe((response) => console.log(response));
    console.log(this.productForm.value);
  }
}
