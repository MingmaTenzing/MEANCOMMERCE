import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  NgModule,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
// import { SearchModalComponent } from './search-modal/search-modal.component';
import { SearchModalService } from '../../../services/search-modal.service';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, take } from 'rxjs';
import { selectProducts } from '../states/cart-items/selector';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Button, ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { selectWishlist } from '../states/wishlist-items/selector';
import { SearchModalComponent } from './search-modal/search-modal.component';
import { auth_session } from '../../types';
import { BackendService } from '../../services/backend/backend.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    BottomNavComponent,
    RouterModule,
    SearchModalComponent,
    ToastModule,
    ButtonModule,
    RippleModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MessageService],
})
export class HeaderComponent implements OnInit, OnDestroy {
  current_user: auth_session | null = null;
  modalState: Boolean = false;
  loginModal: Boolean = false;
  destroy$ = new Subject<void>();
  numberofCartItems: number = 0;
  numberof_WishListedItems: number = 0;
  constructor(
    private SearchModalService: SearchModalService,
    private store: Store,
    private router: Router,
    private messageService: MessageService,
    private backendService: BackendService
  ) {}

  ngOnInit(): void {
    const data = this.SearchModalService.watch();
    data.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      if (value == false) {
        this.modalState = false;
      } else {
        this.modalState = true;
      }
    });

    this.backendService.check_session().subscribe((data) => {
      this.current_user = data;
      console.log(data);
    });

    this.store
      .select(selectProducts)
      .pipe(takeUntil(this.destroy$))
      .subscribe((products) => {
        this.numberofCartItems = products.length;
      });

    this.store
      .select(selectWishlist)
      .pipe(takeUntil(this.destroy$))
      .subscribe((items) => (this.numberof_WishListedItems = items.length));
  }

  changeState() {
    this.SearchModalService.open();
    console.log(this.modalState);
  }

  userLoginModal() {
    this.loginModal = !this.loginModal;
  }
  gotoWishList() {
    if (this.numberof_WishListedItems <= 0) {
      return this.messageService.add({
        severity: 'warn',
        summary: 'No items found on your Wishlist',
        detail: 'Please Add items to wishlist first.',
      });
    }
    this.router.navigate(['/wishlist']);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  goToCart() {
    if (this.numberofCartItems <= 0) {
      return this.messageService.add({
        severity: 'warn',
        summary: 'No items found in Cart',
        detail: 'Please Add items to cart first.',
      });
    }
    this.router.navigate(['/cart']);
  }

  // changeModalState() {
  //   this.SearchModalService.changeModalState();
  //   console.log(this.SearchModalService.isSearchModalOpen);
  // }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
