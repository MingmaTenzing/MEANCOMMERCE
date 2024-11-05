import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './home/footer/footer.component';
import { QuickViewService } from '../services/quickview/quick-view.service';
import { Observable } from 'rxjs';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { HeaderComponent } from './header/header.component';
import { auth_session, user } from '../types';

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
export class AppComponent implements OnInit {
  title = 'MEANCOMMERCE';
  current_user: auth_session | null = null;
  isquickviewEnabled!: Observable<boolean>;
  constructor(private QuickViewService: QuickViewService) {
    this.isquickviewEnabled = this.QuickViewService.quickView$;
  }

  ngOnInit(): void {
    // this.userService.check_auth_session();
  }
}
