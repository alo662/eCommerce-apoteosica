import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartItem, CartService } from '../../services/shopping-cart.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl:'./shopping-cart.html',
})
export default class ShoppingCartComponent {
  items: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {
    this.updateCart();
  }

  updateCart(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  increaseQuantity(item: CartItem): void {
    this.cartService.updateQuantity(item.id, item.quantity + 1);
    this.updateCart();
  }

  decreaseQuantity(item: CartItem): void {
    this.cartService.updateQuantity(item.id, item.quantity - 1);
    this.updateCart();
  }

  removeItem(itemId: number): void {
    this.cartService.removeItem(itemId);
    this.updateCart();
  }
 }
