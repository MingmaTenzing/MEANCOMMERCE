import {
  afterNextRender,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
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
  Observable,
  Subject,
  Subscription,
  filter,
  switchMap,
  take,
  takeUntil,
} from 'rxjs';
import { MeanProducts, cartItems } from '../../types';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RelatedProductsComponent } from '../components/related-products/related-products.component';
import { ProductDetailLoadingComponent } from '../components/product-detail-loading/product-detail-loading.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from '../app.routes';
import { Store } from '@ngrx/store';
import { addProduct } from '../states/cart-items/action';
import { addToWishlist } from '../states/wishlist-items/actions';
import { add_to_compare } from '../states/compare-items/action';

@Component({
  selector: 'app-product-detail',
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

  relatedproducts: MeanProducts[] = [];

  constructor(
    private route: ActivatedRoute,
    private Router: Router,
    private meanBackend: BackendService,
    private store: Store
  ) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
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

  add_to_Wishlist(product: cartItems) {
    this.addtoFav = !this.addtoFav;
    this.store.dispatch(addToWishlist({ product }));
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

  addToCart(product: cartItems) {
    this.store.dispatch(addProduct({ product }));
  }

  addToCompare(product: MeanProducts) {
    console.log('adding to compare');
    this.store.dispatch(add_to_compare({ product }));
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
