import { Component } from '@angular/core';
import { AccountInfoCardComponent } from '../../components/account-info-card/account-info-card.component';
import { BillingAddressCardComponent } from '../../components/billing-address-card/billing-address-card.component';
import { FunFactCardsComponent } from '../../components/fun-fact-cards/fun-fact-cards.component';
import { PaymentOptionComponent } from '../../components/payment-option/payment-option.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AccountInfoCardComponent,
    BillingAddressCardComponent,
    FunFactCardsComponent,
    PaymentOptionComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
