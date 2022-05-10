import { Injectable } from '@angular/core';
import { Categories } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: Categories[] = [
    new Categories(1, 'Bánh Kem Tous Les Jours'),
    new Categories(2, 'Bánh Kem Brodard'),
    new Categories(3, 'Bánh ngọt')
  ];
  constructor() { }

  getCategories(){
    return this.categories;
  }
}
