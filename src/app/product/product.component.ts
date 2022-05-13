import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { ProductsModules } from '../product.model';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: ProductsModules[] = [];
  constructor(
    private productService: ProductServiceService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService
  ) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: ProductsModules) {
    this.cartService.addItem(product);
    window.alert('Thêm vào giỏ hàng thành công!!!');
  }
}
