import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule],
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
