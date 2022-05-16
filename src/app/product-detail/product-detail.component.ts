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
  product?: ProductsModules;
  constructor(private productService:ProductServiceService, private route:ActivatedRoute, private cartService: ShoppingCartService) { }
  
  quantity: number|undefined = 1;
  price: number|undefined = 1;
  addItem(item: any){
    this.cartService.addToCart(item);
    window.alert('Thêm vào giỏ hàng thành công!!!');
  }
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(id);

    this.quantity = this.product?.quantity;
    this.price = this.product?.price;
  }
  
}
