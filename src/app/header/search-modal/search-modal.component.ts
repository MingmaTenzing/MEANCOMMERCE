import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModalService } from '../../../../services/search-modal.service';

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.css',
})
export class SearchModalComponent {}
