import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCompareItems } from '../states/compare-items/selector';
import { Subject, takeUntil } from 'rxjs';
import { MeanProducts } from '../../types';

@Component({
  selector: 'app-compare',
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.css',
})
export class CompareComponent implements OnInit, OnDestroy {
  $destroy = new Subject<void>();
  compare_items: MeanProducts[] = [];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(selectCompareItems)
      .pipe(takeUntil(this.$destroy))
      .subscribe((products) => (this.compare_items = products));
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
