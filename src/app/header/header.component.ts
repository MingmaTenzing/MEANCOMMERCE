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
import { SearchModalComponent } from './search-modal/search-modal.component';
import { SearchModalService } from '../../../services/search-modal.service';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectProducts } from '../states/cart-items/selector';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Button, ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    BottomNavComponent,
    SearchModalComponent,
    RouterModule,
    ToastModule,
    ButtonModule,
    RippleModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MessageService],
})
export class HeaderComponent implements OnInit, OnDestroy {
  modalState: Boolean = false;
  loginModal: Boolean = false;
  destroy$ = new Subject<void>();
  numberofCartItems: number = 0;
  constructor(
    private SearchModalService: SearchModalService,
    private store: Store,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    const data = this.SearchModalService.watch();
    data.subscribe((value) => {
      if (value == false) {
        this.modalState = false;
      } else {
        this.modalState = true;
      }
    });

    this.store
      .select(selectProducts)
      .pipe(takeUntil(this.destroy$))
      .subscribe((products) => {
        this.numberofCartItems = products.length;
      });
  }

  changeState() {
    this.SearchModalService.open();
    console.log(this.modalState);
  }

  userLoginModal() {
    this.loginModal = !this.loginModal;
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
