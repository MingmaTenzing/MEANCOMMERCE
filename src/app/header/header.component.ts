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
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectProducts } from '../states/cart-items/selector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    BottomNavComponent,
    SearchModalComponent,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  modalState: Boolean = false;
  loginModal: Boolean = false;
  destroy$ = new Subject<void>();
  numberofCartItems: number = 0;
  constructor(
    private SearchModalService: SearchModalService,
    private store: Store
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
      .subscribe((products) => (this.numberofCartItems = products.length));
  }

  changeState() {
    this.SearchModalService.open();
    console.log(this.modalState);
  }

  userLoginModal() {
    this.loginModal = !this.loginModal;
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
