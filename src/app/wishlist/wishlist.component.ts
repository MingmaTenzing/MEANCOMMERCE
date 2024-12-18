import { Component, OnInit } from '@angular/core';
import { WishListState } from '../states/wishlist-items/wishlist-State';
import { provideState, StateObservable, Store } from '@ngrx/store';
import { MeanProducts } from '../../types';
import { Subject, takeUntil } from 'rxjs';
import { selectWishlist } from '../states/wishlist-items/selector';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AppState } from '../states/cart-items/app.state';
import { addProduct } from '../states/cart-items/action';
import { remove_wishlist_item } from '../states/wishlist-items/actions';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-wishlist',
    imports: [CommonModule, NgOptimizedImage, ToastModule],
    templateUrl: './wishlist.component.html',
    styleUrl: './wishlist.component.css',
    providers: [MessageService, Store]
})
export class WishlistComponent implements OnInit {
  wishListItems: MeanProducts[] = [];
  $destroy = new Subject<void>();
  viewing_in_dashboard: boolean = false;
  constructor(
    private store: Store<WishListState>,
    private cartStore: Store<AppState>,
    private MessageService: MessageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.store
      .select(selectWishlist)
      .pipe(takeUntil(this.$destroy))
      .subscribe((products) => (this.wishListItems = products));

    if (this.router.url === '/dashboard/wishlist') {
      this.viewing_in_dashboard = true;
    }
  }

  addToCart(product: MeanProducts) {
    this.cartStore.dispatch(addProduct({ product }));
    this.MessageService.add({
      severity: 'success',
      summary: 'Successfully Added',
      detail: `Product has been added successfully `,
    });
  }

  routeToProductDetail(item: MeanProducts) {
    this.router.navigate([`/product-detail/${item._id}`]);
  }

  removefromWishList(product: MeanProducts) {
    this.store.dispatch(remove_wishlist_item({ product }));
  }
}
