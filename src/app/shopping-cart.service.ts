import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsModules } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartItems:ProductsModules[] = [];
  numOfItems = new BehaviorSubject([]);

  constructor() { }

  addItem(product: ProductsModules){
    const exists = this.cartItems.find((item)=> {
      return item.id === product.id
    });

    if(exists)
      exists.quantity ++;
    else
      this.cartItems.push(product);
      
      // this.numOfItems.next(this.cartItems);
    console.log(this.cartItems);
  }

  getItems(){
    return this.cartItems;
  }
}
