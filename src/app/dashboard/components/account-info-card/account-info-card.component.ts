import { Component, Input } from '@angular/core';
import { user } from '../../../../types';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-account-info-card',
  imports: [CommonModule],
  templateUrl: './account-info-card.component.html',
  styleUrl: './account-info-card.component.css',
})
export class AccountInfoCardComponent {
  @Input() user!: user;
}
