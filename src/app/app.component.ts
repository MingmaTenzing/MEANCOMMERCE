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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    QuickViewComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  $destroy = new Subject<void>();
  title = 'MEANCOMMERCE';
  current_user: auth_session | null = null;
  isquickviewEnabled!: Observable<boolean>;
  constructor(
    private QuickViewService: QuickViewService,
    private backendService: BackendService
  ) {
    this.isquickviewEnabled = this.QuickViewService.quickView$;
  }

  ngOnInit(): void {
    this.backendService
      .check_session()
      .pipe(takeUntil(this.$destroy))
      .subscribe((data) => {
        this.current_user = data;
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
