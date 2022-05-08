import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { ProductsModules } from '../products-modules';


@Component({
  
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: ProductsModules[] = [];
  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.getDataService.getProducts().subscribe(p => this.products = p);
  }
}
