import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInformation } from '../product-information';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productList: ProductInformation[] = [];
  productService: ProductsService = inject(ProductsService);

  constructor() {
    this.productList = this.productService.getProducts();
  }
}
