import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeanProducts, shopProducts } from '../../types';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<MeanProducts[]>(
      'http://localhost:5000/api/v1/products?page=1&limit=10'
    );
  }

  getshopProducts(form: FormGroup, selectedBrands: string[]) {
    if (form.value.maximumRange == 0) {
      return this.http.post<MeanProducts[]>(
        'http://localhost:5000/api/v1/products?page=1&limit=10',
        {
          category: form.value.category,
          brand: {
            $in: selectedBrands,
          },
        }
      );
    }
    return this.http.post<MeanProducts[]>(
      'http://localhost:5000/api/v1/products?page=1&limit=10',
      {
        category: form.value.category,
        price: {
          $lt: form.value.maximumRange,
          $gt: form.value.minimumRange,
        },
        brand: {
          $in: selectedBrands,
        },
      }
    );
  }

  getSingleProduct(id: string) {
    return this.http.get<MeanProducts>(
      `http://localhost:5000/api/v1/products/${id}`
    );
  }
}
