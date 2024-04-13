import { CommonModule } from '@angular/common';
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
    console.log(this.productForm.value);
  }
}
