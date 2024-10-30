import { Component, OnInit } from '@angular/core';
import { WishListState } from '../states/wishlist-items/wishlist-State';
import { Store } from '@ngrx/store';
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
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ToastModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
  providers: [MessageService],
})
export class WishlistComponent implements OnInit {
  wishListItems: MeanProducts[] = [
    {
      name: 'Sony WH-1000XM5 Industry Leading Noise Cancelling Wireless Headphones, Hi-Res Audio, Best Phone Call Quality, 30 Hours Battery Life, Wearing Detection, Alexa Voice Assistant, Multipoint - Black',
      price: 488,
      featured: true,
      description:
        'Industry-leading noise cancellation using 8 microphones and Auto NC Optimizer. All new lightweight design with soft fit leather.Superlative sound with precision-engineered 30mm drivers. Superior call quality with four beamforming microphones and AI-based noise reduction algorithm',
      rating: 4.5,
      brand: 'Sony',
      category: 'Headphone',
      images: [
        'https://m.media-amazon.com/images/I/61BP0d2-0AL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/51SMW7+3dwL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/61SvQdmmuhL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/61G3B1sz-uL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/71JBsjsRC5L._AC_SY679_.jpg',
      ],
      createdAt: new Date(),
      stock: 0,
      sku: 0,
      _id: '',
    },
    {
      name: 'Sony WH-1000XM5 Industry Leading Noise Cancelling Wireless Headphones, Hi-Res Audio, Best Phone Call Quality, 30 Hours Battery Life, Wearing Detection, Alexa Voice Assistant, Multipoint - Black',
      price: 488,
      featured: true,
      description:
        'Industry-leading noise cancellation using 8 microphones and Auto NC Optimizer. All new lightweight design with soft fit leather.Superlative sound with precision-engineered 30mm drivers. Superior call quality with four beamforming microphones and AI-based noise reduction algorithm',
      rating: 4.5,
      brand: 'Sony',
      category: 'Headphone',
      images: [
        'https://m.media-amazon.com/images/I/61BP0d2-0AL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/51SMW7+3dwL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/61SvQdmmuhL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/61G3B1sz-uL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/71JBsjsRC5L._AC_SY679_.jpg',
      ],
      createdAt: new Date(),
      stock: 0,
      sku: 0,
      _id: '',
    },
    {
      name: 'Sony WH-1000XM5 Industry Leading Noise Cancelling Wireless Headphones, Hi-Res Audio, Best Phone Call Quality, 30 Hours Battery Life, Wearing Detection, Alexa Voice Assistant, Multipoint - Black',
      price: 488,
      featured: true,
      description:
        'Industry-leading noise cancellation using 8 microphones and Auto NC Optimizer. All new lightweight design with soft fit leather.Superlative sound with precision-engineered 30mm drivers. Superior call quality with four beamforming microphones and AI-based noise reduction algorithm',
      rating: 4.5,
      brand: 'Sony',
      category: 'Headphone',
      images: [
        'https://m.media-amazon.com/images/I/61BP0d2-0AL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/51SMW7+3dwL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/61SvQdmmuhL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/61G3B1sz-uL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/71JBsjsRC5L._AC_SY679_.jpg',
      ],
      createdAt: new Date(),
      stock: 0,
      sku: 0,
      _id: '',
    },
    {
      name: 'Sony WH-1000XM5 Industry Leading Noise Cancelling Wireless Headphones, Hi-Res Audio, Best Phone Call Quality, 30 Hours Battery Life, Wearing Detection, Alexa Voice Assistant, Multipoint - Black',
      price: 488,
      featured: true,
      description:
        'Industry-leading noise cancellation using 8 microphones and Auto NC Optimizer. All new lightweight design with soft fit leather.Superlative sound with precision-engineered 30mm drivers. Superior call quality with four beamforming microphones and AI-based noise reduction algorithm',
      rating: 4.5,
      brand: 'Sony',
      category: 'Headphone',
      images: [
        'https://m.media-amazon.com/images/I/61BP0d2-0AL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/51SMW7+3dwL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/61SvQdmmuhL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/61G3B1sz-uL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/71JBsjsRC5L._AC_SY679_.jpg',
      ],
      createdAt: new Date(),
      stock: 0,
      sku: 0,
      _id: '',
    },
  ];
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
    console.log(this.wishListItems);

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
