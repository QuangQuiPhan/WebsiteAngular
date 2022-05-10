import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { ProductsModules } from '../product.model';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products: ProductsModules[] = [];
  constructor(private productService: ProductServiceService, private route:ActivatedRoute, private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.products = this.productService.getProductsByCategory(id);
  }

  addToCart(product: ProductsModules){
    this.cartService.addItem(product);
    window.alert("Thêm vào giỏ hàng thành công!!!");
  }

}
