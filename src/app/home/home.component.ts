import { Component, OnDestroy } from '@angular/core';
import { WidgetsComponent } from './widgets/widgets.component';
import { FeaturesComponent } from './features/features.component';
import { BestdealsComponent } from './bestdeals/bestdeals.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { ProductsComponent } from './products/products.component';
import { BannerComponent } from './banner/banner.component';
import { ComputerAccessoriesComponent } from './computer-accessories/computer-accessories.component';
import { MacbookBannerComponent } from './macbook-banner/macbook-banner.component';
import { FlashSaleComponent } from './flash-sale/flash-sale.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { QuickViewComponent } from '../components/quick-view/quick-view.component';
import { QuickViewService } from '../../services/quickview/quick-view.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WidgetsComponent,
    FeaturesComponent,
    CommonModule,
    BestdealsComponent,
    ShopCategoryComponent,
    ProductsComponent,
    BannerComponent,
    ComputerAccessoriesComponent,
    MacbookBannerComponent,
    FlashSaleComponent,
    LatestNewsComponent,
    NewsletterComponent,
    FooterComponent,
    QuickViewComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
