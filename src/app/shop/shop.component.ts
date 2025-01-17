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
import { Observable, Subject, Subscription } from 'rxjs';
import { FilterSearch, MeanProducts } from '../../types';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
    selector: 'app-shop',
    imports: [
        ProductContainerComponent,
        LoadingProductComponent,
        CommonModule,
        ReactiveFormsModule,
        LoadingProductComponent,
        FormsModule,
    ],
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit, OnDestroy {
  value!: string;
  constructor(private meanBackend: BackendService) {}

  products: MeanProducts[] = [];
  subscription!: Subscription;

  selectedBrands: string[] = [];

  selectiveProducts = new FormGroup({
    category: new FormControl(''),
    maximumRange: new FormControl(),
    mininumRange: new FormControl(),
  });

  ngOnInit(): void {
    this.subscription = this.meanBackend.getData().subscribe((data) => {
      this.products = data;
    });
  }

  submit() {
    let filter: FilterSearch = {};
    if (this.selectiveProducts.value.category) {
      filter.category = this.selectiveProducts.value.category;
    }
    if (
      this.selectiveProducts.value.maximumRange &&
      this.selectiveProducts.value.mininumRange
    ) {
      filter.price = {
        $lt: this.selectiveProducts.value.maximumRange,
        $gte: this.selectiveProducts.value.mininumRange,
      };
    }
    if (this.selectedBrands.length > 0) {
      filter.brand = {
        $in: this.selectedBrands,
      };
    }

    this.subscription = this.meanBackend
      .getshopProducts(filter)
      .subscribe((data) => {
        this.products = data;
      });
  }

  addBrands(brand: string) {
    if (this.selectedBrands.includes(brand)) {
      this.selectedBrands = this.selectedBrands.filter((data) => brand != data);
    } else {
      this.selectedBrands.push(brand);
    }
  }

  // this.subscription = this.meanBackend
  //   .getshopProducts(this.selectiveProducts)
  //   .subscribe((data) => {
  //     this.products = data;
  //   });

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
