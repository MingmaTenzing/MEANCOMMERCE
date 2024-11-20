import { Component, Input } from '@angular/core';
import { MeanProducts } from '../../../types';

@Component({
    selector: 'app-flash-container',
    imports: [],
    templateUrl: './flash-container.component.html',
    styleUrl: './flash-container.component.css'
})
export class FlashContainerComponent {
  @Input() product!: MeanProducts;
}
