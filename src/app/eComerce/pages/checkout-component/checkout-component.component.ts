import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormatCardDirective } from '../../../card-directive.directive';
import { CartService, CartItem } from '../../services/shopping-cart.service';
import { CvvDirectiveDirective } from '../../../cvv-directive.directive';
import { ExpiryDirectiveDirective } from '../../../expiry-directive.directive';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormatCardDirective, CvvDirectiveDirective, ExpiryDirectiveDirective],
  templateUrl: './Checkout-component.html',
})
export class CheckoutComponent implements OnInit {

  private cartService = inject(CartService)
  items: CartItem[] = []
  total: number = 0


  ngOnInit(): void {
    this.items = this.cartService.getItems()
    this.total = this.cartService.getTotal()
  }



  checkoutForm: FormGroup

  constructor (private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.minLength(16)]],
      expiryDate: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
    })
  }

  onSubmit(): void {
    if (this.checkoutForm.invalid) {
      return
    } else {
      alert('Pago completado con éxito')

    }
  }


}
