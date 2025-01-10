import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { Product } from '../../interfaces/products.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartItem, CartService } from '../../services/shopping-cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './buy-page.component.html',
  styles: ``
})
export default class BuyPageComponent implements OnInit {
  private productService = inject(ProductService)
  private route = inject(ActivatedRoute);
  private cartService = inject(CartService)



  product!: Product
  isLoading = true;
  quantity: number = 1;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProducts().subscribe((data) => {
        this.product = data.find((p) => p.id === Number(id))!;
        this.isLoading = false;
      }, );
    }
  }

  addToCart(): void {
    if (this.product) {
      const cartItem: CartItem = {
        id: this.product.id,
        title: this.product.title,
        description: this.product.description,
        price: this.product.price,
        quantity: this.quantity,
        image: this.product.image,
      };
      this.cartService.addItem(cartItem);
      alert(`${this.product.title} ha sido añadido al carrito`);
    }
  }


  }
