import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
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
import { After } from 'v8';
import { animate, style, transition, trigger } from '@angular/animations';

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
  styleUrl: './app.component.css',
  animations: [
    trigger('enterAndLeave', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('100ms ease', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AppComponent {
  title = 'MEANCOMMERCE';
  isquickviewEnabled!: Observable<boolean>;
  api_delay_message: boolean = true;

  constructor(private QuickViewService: QuickViewService) {
    this.isquickviewEnabled = this.QuickViewService.quickView$;
  }

  closeModal() {
    this.api_delay_message = false;
    document.body.classList.remove('stop-scrolling');
  }
}
