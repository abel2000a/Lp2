import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
list;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { this.list=this.cartService.getList()}

  ngOnInit() {
  }

}
