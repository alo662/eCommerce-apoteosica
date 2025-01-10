import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];
  private totalItemsSubject = new BehaviorSubject<number>(0);
  totalItems$ = this.totalItemsSubject.asObservable()

  getItems(): CartItem[] {
    return this.items;
  }

  addItem(item: CartItem): void {
    const existingItem = this.items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity = Number(existingItem.quantity) + Number(item.quantity);
    } else {
      this.items.push(item);
    }
    this.updateTotalItems()
  }

  updateQuantity(itemId: number, quantity: number): void {
    const item = this.items.find((i) => i.id === itemId);
    if (item && quantity > 0) {
      item.quantity = quantity;
    } else {
      this.removeItem(itemId);
    }
    this.updateTotalItems()
  }

  removeItem(itemId: number): void {
    this.items = this.items.filter((i) => i.id !== itemId);
    this.updateTotalItems()
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  private updateTotalItems(): void {
    const total = this.items.reduce((sum, item) => sum + item.quantity, 0);
    this.totalItemsSubject.next(total)
  }
}
