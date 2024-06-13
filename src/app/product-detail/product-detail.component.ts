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
import { Subject, Subscription, filter } from 'rxjs';
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
export class ProductDetailComponent implements OnInit, OnDestroy {
  productId: string = '';
  subscription!: Subscription;
  routerSubscription!: Subscription;

  mainProductImage: string = '';
  numberofItems_addToCart: number = 1;

  productmainImages: Array<string> = [];

  addtoFav: boolean = false;

  product: MeanProducts | null = null;

  relatedproducts: MeanProducts[] | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meanBackend: BackendService
  ) {
    this.routerSubscription = this.router.events
      .pipe(
        filter(
          (event: Event): event is ActivationEnd =>
            event instanceof ActivationEnd
        )
      )
      .subscribe((event: ActivationEnd) => {
        this.productId = event.snapshot.params['id'];
        this.subscription = this.meanBackend
          .getSingleProduct(this.productId)
          .subscribe((data) => (this.product = data));
      });
  }

  ngOnInit(): void {
    this.subscription = this.meanBackend
      .getCategoryProducts(this.product!.category)
      .subscribe((data) => (this.relatedproducts = data));
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
    this.subscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
