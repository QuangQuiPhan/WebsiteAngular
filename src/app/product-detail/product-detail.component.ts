import { Component, Input, OnInit } from '@angular/core';

export interface isProduct{
  id: number;
  title: string;
  description: string;
  price: number;
  quality: number;
  avatar: string;
  alt: string;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  Detail: isProduct = {
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
