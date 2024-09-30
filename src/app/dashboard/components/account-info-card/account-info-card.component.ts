import { Component, Input } from '@angular/core';
import { user } from '../../../../types';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-account-info-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './account-info-card.component.html',
  styleUrl: './account-info-card.component.css',
})
export class AccountInfoCardComponent {
  @Input() user!: user;
}
