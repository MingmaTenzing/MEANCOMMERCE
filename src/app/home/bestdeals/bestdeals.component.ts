import { Component } from '@angular/core';
import { BestDealProductComponent } from '../../components/best-deal-product/best-deal-product.component';

@Component({
  selector: 'app-bestdeals',
  standalone: true,
  imports: [BestDealProductComponent],
  templateUrl: './bestdeals.component.html',
  styleUrl: './bestdeals.component.css',
})
export class BestdealsComponent {}
