import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/products.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly apiUrl = 'https://fakestoreapi.com/products';

  private httpClient =  inject(HttpClient)

  getProducts(limit: number = 10): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}?limit=${limit}`);
  }
}
