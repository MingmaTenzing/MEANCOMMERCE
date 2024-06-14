import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationEnd,
  NavigationStart,
  Route,
  Event,
  Router,
  RouterEvent,
} from '@angular/router';
import { BackendService } from '../../services/backend/backend.service';
import {
  Subject,
  Subscription,
  filter,
  switchMap,
  take,
  takeUntil,
} from 'rxjs';
import { MeanProducts } from '../../types';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RelatedProductsComponent } from '../components/related-products/related-products.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    NgOptimizedImage,
    RelatedProductsComponent,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnDestroy {
  productId: string = '';
  private _destroy$ = new Subject<void>();
  mainProductImage: string = '';
  numberofItems_addToCart: number = 1;

  productmainImages: Array<string> = [];

  addtoFav: boolean = false;

  product: MeanProducts | null = null;

  relatedproducts: MeanProducts[] | null = null;

  constructor(
    private route: ActivatedRoute,
    private meanBackend: BackendService
  ) {
    this.route.params
      .pipe(
        takeUntil(this._destroy$),
        switchMap((params) => this.meanBackend.getSingleProduct(params['id'])),
        switchMap((item) => {
          this.product = item;
          return this.meanBackend.getCategoryProducts(this.product.category);
        })
      )
      .subscribe((categoryProduct) => (this.relatedproducts = categoryProduct));
  }

  favoriteModal() {
    this.addtoFav = !this.addtoFav;
  }

  changeMainImage(image: string) {
    this.mainProductImage = image;
  }

  increaseNumber() {
    if (this.numberofItems_addToCart < 20) {
      this.numberofItems_addToCart++;
    }
  }
  decreaseNumber() {
    if (this.numberofItems_addToCart > 1) {
      this.numberofItems_addToCart--;
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}
