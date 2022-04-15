import { Component, Input, OnInit } from '@angular/core';
import { ProductsModules } from '../products-modules';
import { Data } from '../data-modules';
import { data } from 'jquery';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  @Input() product?: ProductsModules;
  
  detail = Data;

  Detail = {
    id: 1,
    title: "Bánh kem dâu",
    description: "Bánh kem có vị dâu",
    price: 300,
    quality: 1,
    avatar: 'assets/imgs/1.png', 
    alt: "Ảnh bánh kem dâu"
  }
  constructor() { }
  inc(){
    this.Detail.price = 300;
    this.Detail.quality += 1;
    this.Detail.price = this.Detail.quality * this.Detail.price;
  }

  // @Input this.Detail.quality! number

  des(){
    this.Detail.price = 300;
    this.Detail.quality -= 1;
    this.Detail.price = this.Detail.quality * this.Detail.price;
  }

  ngOnInit(): void {
  }

}
