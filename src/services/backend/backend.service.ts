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
    let peace: any = {};
    peace.name = 'Mingma';
    console.log(peace);
    if (!form.value.maximumRange || selectedBrands.length === 0) {
      return this.http.post<MeanProducts[]>(
        'http://localhost:5000/api/v1/products?page=1&limit=10',
        {
          category: form.value.category,
        }
      );
    }

    return this.http.post<MeanProducts[]>(
      'http://localhost:5000/api/v1/products?page=1&limit=10',
      {
        category: form.value.category,
        price: {
          $lt: form.value.maximumRange,
          $gte: form.value.minimumRange,
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
