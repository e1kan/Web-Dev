import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../../services/products.service';
import { ProductInformation } from '../../product-information';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: ProductInformation[] = []; // Storing filtered list of products
  categoryId: number | null = null; // Storing the received category ID
  categoryName: string = ''; // To show category name

  constructor(private productService: ProductsService, private route: ActivatedRoute) {}

  // When the component is first initialized...
  ngOnInit() {
    // Subscribe to route parameter changes to get the category ID from the URL
    this.route.paramMap.subscribe(params => {
      this.categoryId = Number(params.get('id')); // Convert the id to a number
      this.filterProducts(); // Filter products based on category
    });

    this.route.queryParams.subscribe(params => {
      this.categoryName = params['name'] || 'Unknown Category'; // Get category name from query params
    });
  }

  filterProducts() {
    this.products = this.productService.getProducts().filter(product => product.categoryId === this.categoryId);
  }

  onRemoveProduct(productId: number): void {
    this.productService.removeProduct(productId);
    this.filterProducts();
  }
}
