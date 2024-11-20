import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './home/footer/footer.component';
import { QuickViewService } from '../services/quickview/quick-view.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { HeaderComponent } from './header/header.component';
import { auth_session, user } from '../types';
import { BackendService } from '../services/backend/backend.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        QuickViewComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MEANCOMMERCE';
  isquickviewEnabled!: Observable<boolean>;

  constructor(private QuickViewService: QuickViewService) {
    this.isquickviewEnabled = this.QuickViewService.quickView$;
  }
}
