import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../../services/backend/backend.service';
import { Subscription } from 'rxjs';
import { MeanProducts } from '../../types';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatIconModule, CommonModule, NgOptimizedImage],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  productId: string = '';
  subscription!: Subscription;
  mainProductImage: string = '';

  numberofItems_addToCart: number = 1;

  productmainImages: Array<string> = [];

  addtoFav: boolean = false;

  product: MeanProducts | null = null;

  constructor(
    private route: ActivatedRoute,
    private meanBackend: BackendService
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.subscription = this.meanBackend
      .getSingleProduct(this.productId)
      .subscribe((data) => (this.product = data));
  }

  favoriteModal() {
    this.addtoFav = !this.addtoFav;
  }

  changeMainImage(image: string) {
    this.mainProductImage = image;
  }

  increaseNumber() {
    if (this.numberofItems_addToCart < 20) {
      this.numberofItems_addToCart++;
    }
  }
  decreaseNumber() {
    if (this.numberofItems_addToCart > 1) {
      this.numberofItems_addToCart--;
    }
  }
}
