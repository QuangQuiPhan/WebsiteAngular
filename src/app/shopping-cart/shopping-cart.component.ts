import { Component, OnInit } from '@angular/core';
import { ProductsModules } from '../product.model';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }
  Items = this.shoppingCart.getItems();
}
