import { Component, Input } from '@angular/core';
import { user } from '../../../../types';

@Component({
  selector: 'app-billing-address-card',
  standalone: true,
  imports: [],
  templateUrl: './billing-address-card.component.html',
  styleUrl: './billing-address-card.component.css',
})
export class BillingAddressCardComponent {
  @Input() user!: user;
}
