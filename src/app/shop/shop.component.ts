import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductContainerComponent } from '../components/product-container/product-container.component';
import { LoadingProductComponent } from '../components/loading-product/loading-product.component';
import { BackendService } from '../../services/backend/backend.service';
import { Observable, Subscription } from 'rxjs';
import { MeanProducts } from '../../types';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    ProductContainerComponent,
    LoadingProductComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit, OnDestroy {
  constructor(private meanBackend: BackendService) {}

  products: Array<MeanProducts> = [];
  subscription!: Subscription;
  categoryName: string = '';
  shopRange: string = '';

  categoryForm = new FormGroup({
    SmartPhone: new FormControl('smartphone'),
    Computers: new FormControl('computers'),
    Accessories: new FormControl('accessories'),
    Headphones: new FormControl('headphones'),
  });

  ngOnInit(): void {
    this.subscription = this.meanBackend.getData().subscribe((data) => {
      this.products = data;
    });
  }
  onSubmit() {
    console.log(this.categoryForm.value.Accessories);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
