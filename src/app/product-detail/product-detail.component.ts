import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationEnd,
  NavigationStart,
  Route,
  Event,
  Router,
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
import { ProductDetailLoadingComponent } from '../components/product-detail-loading/product-detail-loading.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from '../app.routes';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    NgOptimizedImage,
    RelatedProductsComponent,
    ProductDetailLoadingComponent,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
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
    private Router: Router,
    private meanBackend: BackendService
  ) {
    Router.events.pipe(takeUntil(this._destroy$)).subscribe((event: Event) => {
      if (event instanceof ActivationEnd) {
        window.scrollTo(0, 0);
      }
    });

    this.route.params
      .pipe(
        takeUntil(this._destroy$),
        switchMap((params) => this.meanBackend.getSingleProduct(params['id'])),
        switchMap((item) => {
          this.product = item;
          return this.meanBackend.getCategoryProducts(this.product.category);
        })
      )
      .subscribe((categoryProduct) => {
        this.relatedproducts = categoryProduct;
      });
  }

  ngOnInit(): void {
    this.Router.events
      .pipe(takeUntil(this._destroy$))
      .subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
          console.log(event);
        }
      });
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
