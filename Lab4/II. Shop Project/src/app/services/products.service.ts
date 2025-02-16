import { Injectable } from '@angular/core';
import { ProductInformation } from '../product-information';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly baseUrl = '/assets';

  getProducts(): ProductInformation[] {
    return [
      {
        id: 1,
        image: `${this.baseUrl}/iphone16pro.jpg`,
        name: 'Iphone 16 Pro Max',
        description: "Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.",
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
      },
      {
        id: 2,
        image: `${this.baseUrl}/xiaomiredmi13c.jpg`,
        name: 'Xiaomi Redmi 13C',
        description: "Настоящий прорыв в мире бюджетных мобильных устройств от Xiaomi",
        rating: 4.6,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000'
      },
      {
        id: 3,
        image: `${this.baseUrl}/pocox65g.jpg`,
        name: 'Poco X6 5G',
        description: "POCO X6 задает новые стандарты производительности и комфорта.",
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/poco-x6-5g-12-gb-256-gb-belyi-116061335/?c=750000000'
      },
      {
        id: 4,
        image: `${this.baseUrl}/realmenote50.jpg`,
        name: 'Realme Note 50',
        description: "Смартфон Realme Note 50 диагональю 6.7'' с защитой по стандарту IP54.",
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/realme-note-50-4-gb-128-gb-chernyi-116138550/?c=750000000'
      },
      {
        id: 5,
        image: `${this.baseUrl}/samsungs24ultra5g.jpg`,
        name: 'Samsung Galaxy S24 Ultra 5G',
        description: "Смартфон с лучшей в отрасли камерой, характеристиками и новым AI Galaxy AI.",
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000'
      },
      {
        id: 6,
        image: `${this.baseUrl}/samsunggalaxya555g.jpg`,
        name: 'Samsung Galaxy A55 5G',
        description: "Tоповая модель линейки, получившая улучшения в характеристиках и в ПО.",
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-128-gb-sirenevyi-117420288/?c=750000000'
      },
      {
        id: 7,
        image: `${this.baseUrl}/samsunggalaxya06.jpg`,
        name: 'Samsung Galaxy A06',
        description: "Бюджетный телефон 2018 года. Динамичный, яркий, широкий дисплей.",
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a06-6-gb-128-gb-goluboi-123430470/?c=750000000'
      },
      {
        id: 8,
        image: `${this.baseUrl}/xiaomiredmia3.jpg`,
        name: 'Xiaomi Redmi A3',
        description: "Ультратонкий корпус в сочетании с камерой в стиле ар-деко создают изысканный дизайн.",
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-a3-4-gb-128-gb-chernyi-116932148/?c=750000000'
      },
      {
        id: 9,
        image: `${this.baseUrl}/iphone16.jpg`,
        name: 'Apple iPhone 16',
        description: "Новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.",
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-fioletovyi-123727182/?c=750000000'
      },
      {
        id: 10,
        image: `${this.baseUrl}/iphone15.jpg`,
        name: 'Apple iPhone 15',
        description: "Смартфон, сочетающий в себе оптику, мощный процессор, долгоиграющую батарею и отличный дизайн.",
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-rozovyi-113137949/?c=750000000'
      }
    ]
  }
}
