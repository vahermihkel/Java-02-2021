import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../item/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Item[] = [];
  cartChanged = new Subject<Item[]>();

  constructor() { }

  addToCart(item: Item) {
    this.cartItems.push(item);
    this.cartChanged.next(this.cartItems);
  }

  getItemsFromCart() {
    return this.cartItems;
  }

  emptyCart() {
    this.cartItems = [];
    this.cartChanged.next(this.cartItems);
  }

  deleteFromCart(i: number) {
    this.cartItems.splice(i,1);
    this.cartChanged.next(this.cartItems);
  }

  calculateSumOfCart() {
    let sumOfCart = 0;
    this.cartItems.forEach(element => {
      sumOfCart += (Number)(element.price)
    });
    return sumOfCart;
  }
}
