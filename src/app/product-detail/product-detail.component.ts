import { Component, Input, OnInit } from '@angular/core';
import { ProductsModules } from '../product.model';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  detail: ProductsModules|undefined;
  constructor(private productService:ProductServiceService, private route:ActivatedRoute, private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.detail = this.productService.getProduct(id);
  }

  addToCart(product: ProductsModules){
    this.cartService.addItem(product);
    window.alert("Thêm vào giỏ hàng thành công!!!");
  }

}
