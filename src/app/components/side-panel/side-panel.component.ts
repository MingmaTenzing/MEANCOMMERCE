import { Component, Input } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  Router,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { Console } from 'console';
@Component({
  selector: 'app-side-panel',
  imports: [
    SidebarModule,
    ButtonModule,
    RouterModule,
    CommonModule,
    RouterModule,
    RouterOutlet,
    RouterLinkActive,
  ],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css',
})
export class SidePanelComponent {
  @Input() sidebarVisible: boolean = false;
  constructor(private router: Router) {}

  gotoCart() {
    this.router.navigate(['/cart']);
  }
  gotoWishlist() {
    this.router.navigate(['/wishlist']);
  }
}
