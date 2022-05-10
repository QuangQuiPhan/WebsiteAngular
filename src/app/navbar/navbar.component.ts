import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { ProductServiceService } from '../product-service.service';
import { Categories, ProductsModules } from '../product.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories: Categories[] = [];
  products:ProductsModules[] = [];
  constructor(private categoriesService: CategoriesService,private productService: ProductServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.getCategories();
    const id = +this.route.snapshot.params['id'];
    this.products = this.productService.getProductsByCategory(id);
  }

}
