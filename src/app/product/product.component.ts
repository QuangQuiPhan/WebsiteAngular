import { Component, OnInit } from '@angular/core';
import { Data } from '../data-modules';
import { ProductsModules } from '../products-modules';


@Component({
  
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  products = Data;

  selectProduct?: ProductsModules;
  onSelect(product: ProductsModules):void{
    this.selectProduct = product;
  }
  ngOnInit(): void {
  }

}
