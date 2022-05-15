import { Injectable } from '@angular/core';
import { ProductServiceService } from './product-service.service';
import { ProductsModules } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items: ProductsModules[] = [];
  /* . . . */

  addToCart(product: any) { 
    const exists = this.items.find(p => p.id === product.id);
    if(!exists)
      this.items.push(product);
    else
      exists.quantity ++
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() { 
  }

  countItems(){
    return this.items.length;
  }
}
