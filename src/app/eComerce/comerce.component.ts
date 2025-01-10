import { Product } from './interfaces/products.interface';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from "./auth/sidebar/sidebar.component";
import { FormsModule } from '@angular/forms';
import { CartService } from './services/shopping-cart.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, SidebarComponent, FormsModule, CommonModule],
  templateUrl: './comerce.component.html',
  styles: ``
})
export default class ComerceComponent {
  searchTerm: string = ''
  totalItemsInCart: number = 0;

  private router = inject(Router)
  private cartService = inject(CartService)

  ngOnInit(): void {
    this.cartService.totalItems$.subscribe((total) => {
      this.totalItemsInCart = total
    })
  }

  onSearch(): void {
    if (
      this.searchTerm.trim()) {
        this.router.navigate(['netmall/search-page'], {queryParams: { q: this.searchTerm }})
      }
  }

}
