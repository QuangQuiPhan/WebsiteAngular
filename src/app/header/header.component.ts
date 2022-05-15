import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  i: number = 0;
  constructor(private cartService: ShoppingCartService, private productsService: ProductServiceService) { }

  ngOnInit(): void {
    this.i = this.cartService.countItems();
  }

}
