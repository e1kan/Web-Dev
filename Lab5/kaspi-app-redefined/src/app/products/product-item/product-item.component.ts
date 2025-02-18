import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductInformation } from '../../product-information';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent {
  @Input() product!: ProductInformation; // Receiving a single product from the parent
  @Output() removeProduct = new EventEmitter<number>(); // Emitting the product ID to remove

  constructor(private productService: ProductsService) {}

  // Handling the "Like" button functionality
  onLike() {
    this.productService.increaseLikes(this.product.id); // Calling service to increase likes
  }

  // Emittin remove event when the product needs to be removed
  onRemove() {
    this.removeProduct.emit(this.product.id); // Emitting product ID for removal
  }

  // Sharing on Telegram
  shareOnTelegram(link: string) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegramUrl, '_blank');
  }
}
