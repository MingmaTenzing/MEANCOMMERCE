import { Component, Input } from '@angular/core';
import { user } from '../../../../types';

@Component({
    selector: 'app-payment-option',
    imports: [],
    templateUrl: './payment-option.component.html',
    styleUrl: './payment-option.component.css'
})
export class PaymentOptionComponent {
  @Input() user!: user;
}
