import { Component } from '@angular/core';
import { ProductContainerComponent } from '../../components/product-container/product-container.component';

@Component({
  selector: 'app-computer-accessories',
  standalone: true,
  imports: [ProductContainerComponent],
  templateUrl: './computer-accessories.component.html',
  styleUrl: './computer-accessories.component.css',
})
export class ComputerAccessoriesComponent {}
