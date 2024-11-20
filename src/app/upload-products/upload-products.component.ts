import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-upload-products',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
    ],
    templateUrl: './upload-products.component.html',
    styleUrl: './upload-products.component.css'
})
export class UploadProductsComponent implements OnInit {
  uploadedImages: Array<string> = [];
  imagefileToUpload: File | null = null;
  sub!: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.sub = this.http
      .get('http://localhost:5000/api/v1/products')
      .subscribe((data) => console.log(data));
  }
  title = 'Upload products';
  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    featured: new FormControl(Boolean),
    description: new FormControl(''),
    rating: new FormControl(Number),
    stock: new FormControl(Number),
    brand: new FormControl(''),
  });

  // formSubmit() {
  //   this.http
  //     .post('http://localhost:5000/api/v1/products', this.productForm.value)
  //     .subscribe((response) => console.log(response));
  //   console.log(this.productForm.value);
  // }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }
}
