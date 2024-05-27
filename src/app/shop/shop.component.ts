import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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
    LoadingProductComponent,
    FormsModule,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit, OnDestroy {
  constructor(private meanBackend: BackendService) {}

  products: MeanProducts[] = [];
  subscription!: Subscription;

  selectiveProducts = new FormGroup({
    category: new FormControl('Smartphone'),
    maximumRange: new FormControl(0),
    mininumRange: new FormControl(0),
  });

  ngOnInit(): void {
    this.subscription = this.meanBackend.getData().subscribe((data) => {
      this.products = data;
    });
  }

  submit() {
    console.log(this.selectiveProducts.value);
    this.subscription = this.meanBackend
      .getshopProducts(this.selectiveProducts)
      .subscribe((data) => {
        this.products = data;
      });
  }

  setPriceRange(min: number, max: number) {
    this.selectiveProducts.patchValue({
      mininumRange: min,
      maximumRange: max,
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
