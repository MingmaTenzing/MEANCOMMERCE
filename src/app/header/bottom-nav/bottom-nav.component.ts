import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.css',
})
export class BottomNavComponent {
  isAllCategoryOpen = false;

  changeState() {
    this.isAllCategoryOpen = !this.isAllCategoryOpen;
    console.log(this.isAllCategoryOpen);
  }
}
