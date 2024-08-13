import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { QuickViewService } from '../services/quickview/quick-view.service';
import { Observable } from 'rxjs';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { MatIconRegistry } from '@angular/material/icon';
import { Store, StoreModule } from '@ngrx/store';
import { cartReducer } from './states/cart-items/reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
    QuickViewComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MEANCOMMERCE';

  isquickviewEnabled!: Observable<boolean>;
  constructor(private QuickViewService: QuickViewService) {
    this.isquickviewEnabled = this.QuickViewService.quickView$;
  }
}
