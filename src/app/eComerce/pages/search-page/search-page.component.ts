import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/products.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search-page.component.html',
  styles: ``
})
export default class SearchPageComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['q'] || '';
      this.filterProducts();
    });
  }

  filterProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = this.products.filter((product) =>
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }
}
