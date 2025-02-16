import { Component, Input } from '@angular/core';
import { ProductInformation } from '../product-information';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  template: `
    <section class="listing" *ngFor="let product of products">
      <a href="{{product.link}}" target="_blank"><img class="listing-photo" [src]="product.image" alt="Photo of {{product.name}}"></a>
      <h2 class="listing-heading">{{ product.name }}</h2>
      <p class="listing-description">{{ product.description }}</p>
      <p class="listing-rating">Rating: {{ product.rating }}</p>
      <button (click)="shareOnTelegram(product.link)" type="button" class="listing-share-button">Share</button>
    </section>
  `,
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  @Input() products: ProductInformation[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  shareOnTelegram(link: string) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegramUrl, '_blank');
  }
}
