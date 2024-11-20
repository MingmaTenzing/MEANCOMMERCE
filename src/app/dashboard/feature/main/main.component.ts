import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountInfoCardComponent } from '../../components/account-info-card/account-info-card.component';
import { BillingAddressCardComponent } from '../../components/billing-address-card/billing-address-card.component';
import { FunFactCardsComponent } from '../../components/fun-fact-cards/fun-fact-cards.component';
import { RecentOrderComponent } from '../../components/recent-order/recent-order.component';
import { BackendService } from '../../../../services/backend/backend.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { user } from '../../../../types';
import { CommonModule } from '@angular/common';
import { MainLoadingComponent } from '../../components/loading/main-loading/main-loading.component';
import { PaymentOptionComponent } from '../../components/payment-option/payment-option.component';

@Component({
    selector: 'app-main',
    imports: [
        AccountInfoCardComponent,
        BillingAddressCardComponent,
        FunFactCardsComponent,
        PaymentOptionComponent,
        CommonModule,
        RecentOrderComponent,
        MainLoadingComponent,
    ],
    templateUrl: './main.component.html',
    styleUrl: './main.component.css'
})
export class MainComponent implements OnDestroy {
  user$: Observable<any> | null = null;
  testloading: boolean = true;

  constructor(private backend: BackendService) {
    this.user$ = this.backend.fetch_user_details();
  }
  ngOnDestroy(): void {}
}
