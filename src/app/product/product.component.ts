import { Component, OnInit } from '@angular/core';
import { Data } from '../data-modules';

export interface isProduct{
  id: number;
  title: string;
  description: string;
  price: number;
  avatar: string;
  alt: string;
}

@Component({
  
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = "Sản phẩm";
  constructor() { }
  products = Data;

  ngOnInit(): void {
  }

}
