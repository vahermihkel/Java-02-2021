import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  itemsOriginal: Item[] = []
  sortPriceNumber = 0;
  sortTitleNumber = 0;

  constructor(private cartService: CartService,
      private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(response => {
      this.itemsOriginal = response;
      this.items = this.itemsOriginal.slice();
    });
  }

  onSortPrice() {
    if (this.sortPriceNumber == 0) {
      this.items.sort((a, b) => Number(a.price) - Number(b.price));
      this.sortPriceNumber = 1;
    } else if (this.sortPriceNumber == 1) {
      this.items.sort((a, b) => Number(b.price) - Number(a.price));
      this.sortPriceNumber = 2;
    } else {
      this.items = this.itemsOriginal.slice();
      this.sortPriceNumber = 0;
    }
  }

  onSortTitle() {
    if (this.sortTitleNumber == 0) {
      this.items.sort((a, b) => a.title.localeCompare(b.title));
      this.sortTitleNumber = 1;
    } else if (this.sortTitleNumber == 1) {
      this.items.sort((a, b) => b.title.localeCompare(a.title));
      this.sortTitleNumber = 2;
    } else {
      this.items = this.itemsOriginal.slice();
      this.sortTitleNumber = 0;
    }
  }

  onRemoveFromCart(item: Item) {
    this.cartService.deleteFromCartFromHome(item);
  }

  onAddToCart(item: Item ) {
    this.cartService.addToCart(item);
  }
}
