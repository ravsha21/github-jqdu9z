import { Component, OnInit } from '@angular/core';
/* Import the CartService from the cart.service.ts file. */
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(
    private cartService: CartService
  ) { }
/* Recall getItems() method to Set the items using the cart service's .  */
  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}