import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { QuickViewService } from '../../../services/quickview/quick-view.service';
import { Observable, ObservedValueOf, Subject, Subscription } from 'rxjs';
import { cartItems, MeanProducts } from '../../../types';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';
import { Store } from '@ngrx/store';
import { addProduct } from '../../states/cart-items/action';
import { Router } from '@angular/router';
import {
  addToWishlist,
  remove_wishlist_item,
} from '../../states/wishlist-items/actions';

@Component({
  selector: 'app-quick-view',
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './quick-view.component.html',
  styleUrl: './quick-view.component.css',
  animations: [
    trigger('enterAndLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class QuickViewComponent implements OnInit, OnDestroy {
  constructor(
    private QuickViewService: QuickViewService,
    private router: Router,
    private store: Store
  ) {}

  // product$!: Observable<MeanProducts>;
  product: MeanProducts | null = null;

  mainProductImage: string = '';
  addedtoCart: boolean = false;
  numberofItems_addToCart: number = 1;

  productmainImages: Array<string> = [];

  addtoFav: boolean = false;

  subscription!: Subscription;
  ngOnInit(): void {
    // this.product$ = this.QuickViewService.getQuickViewProduct();
    this.subscription = this.QuickViewService.getQuickViewProduct().subscribe(
      (data) => (this.product = data)
    );
    if (this.product) {
      this.mainProductImage = this.product.images[0];
    }
  }

  closeQuickView() {
    this.QuickViewService.closeQuickView();
  }

  add_to_Wishlist(product: MeanProducts) {
    this.addtoFav = !this.addtoFav;
    this.store.dispatch(addToWishlist({ product }));
  }
  remove_from_wishList(product: MeanProducts) {
    this.addtoFav = !this.addtoFav;
    this.store.dispatch(remove_wishlist_item({ product }));
  }
  changeMainImage(image: string) {
    this.mainProductImage = image;
  }

  addtoCart(product: MeanProducts) {
    this.store.dispatch(addProduct({ product }));
    this.addedtoCart = true;
  }
  gotoCart() {
    this.QuickViewService.closeQuickView();
    this.router.navigate(['/cart']);
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
  }
}
