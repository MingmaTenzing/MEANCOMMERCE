import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModalService } from '../../../../services/search-modal.service';

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.css',
})
export class SearchModalComponent implements OnInit {
  isModalOpen: Boolean = false;
  constructor(private searchService: SearchModalService) {}
  ngOnInit(): void {
    const data = this.searchService
      .watch()
      .subscribe((value) => (this.isModalOpen = value));
    console.log(this.isModalOpen);
  }

  closeModal() {
    this.searchService.close();
    console.log(this.isModalOpen);
  }
}
