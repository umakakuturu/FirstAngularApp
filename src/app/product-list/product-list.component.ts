import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
//This defines the structure of the Product object. It has an id, a name, and an array of categories.
interface Product {
  id: number;
  name: string;
  categories: string[]; // Update the property name and type
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
// The products array is initialized to store the list of products.
// The selectedCategories array will store the currently selected categories.
// The constructor injects the ProductService to fetch products.
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedCategories: string[] = [];

  constructor(private productService: ProductService) {}
  //The ngOnInit method is called when the component is initialized, fetching products using the service.
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  //The filterProducts method is called when a checkbox is changed. It adds or removes the selected category from 
  //the selectedCategories array.
  filterProducts(category: string, isChecked: boolean): void {
    if (isChecked) {
     // The category is added to the selectedCategories array using the push method. This means the user wants to include this category in the filter
      this.selectedCategories.push(category);
    } else {

      // If the checkbox is being unchecked (isChecked is false):

      // The code first checks if the category is already in the selectedCategories array. This is done using the indexOf method.
      //If the category is found (index !== -1), it means the user had previously selected this category.
      // In this case, the code uses the splice method to remove the category from the selectedCategories array. 
      //This operation removes the category at the found index and retains the remaining categories for filtering.
      const index = this.selectedCategories.indexOf(category);
      if (index !== -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
  }
 // The productMatchesSelectedCategories method checks if a product matches any of the selected categories. 
 //If no categories are selected, it returns true.
  productMatchesSelectedCategories(product: Product): boolean {
    if (this.selectedCategories.length === 0) {
      return true; // Display all products if no checkboxes are checked
    }

    return product.categories.some(category => this.selectedCategories.includes(category));
  }
}
