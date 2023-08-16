import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mockProducts = [
    { id: 1, name: 'Live and Work Well', categories: ['Improving Relationships', 'family planning'] },
    { id: 2, name: 'Find a Doctor', categories: ['family planning'] },
    { id: 3, name: 'Virtual Care with Teladoc', categories: ['in-person appointments'] },
    { id: 4, name: 'Online Doctor', categories: ['personal development'] },
  ];

  getProducts() {
    return this.mockProducts;
  }
}
