import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    items = [];

  constructor() {}

  addtocart(product) {
    this.items.push(product);
  }

  getList() {
    return this.items;
  }

  removeAll() {
    this.items = [];
    return this.items;
  }

}