import { Component } from '@angular/core';
import { WidgetsComponent } from './widgets/widgets.component';
import { FeaturesComponent } from './features/features.component';
import { BestdealsComponent } from './bestdeals/bestdeals.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WidgetsComponent,
    FeaturesComponent,
    BestdealsComponent,
    ShopCategoryComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
