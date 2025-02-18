import { Injectable } from '@angular/core';
import { ProductInformation } from '../product-information';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private readonly baseUrl = '/assets';

  private products: ProductInformation[] = [
    // 1. SMARTPHONES: ------------------------------------------------------------------------------
    {
      id: 11,
      categoryId: 1,
      likes: 0,
      image: `${this.baseUrl}/smartphones/iphone16pro.jpg`,
      name: 'Iphone 16 Pro Max',
      description: "Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.",
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    },
    {
      id: 12,
      categoryId: 1,
      likes: 0,
      image: `${this.baseUrl}/smartphones/xiaomiredmi13c.jpg`,
      name: 'Xiaomi Redmi 13C',
      description: "Настоящий прорыв в мире бюджетных мобильных устройств от Xiaomi",
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000'
    },
    {
      id: 13,
      categoryId: 1,
      likes: 0,
      image: `${this.baseUrl}/smartphones/pocox65g.jpg`,
      name: 'Poco X6 5G',
      description: "POCO X6 задает новые стандарты производительности и комфорта.",
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/poco-x6-5g-12-gb-256-gb-belyi-116061335/?c=750000000'
    },
    {
      id: 14,
      categoryId: 1,
      likes: 0,
      image: `${this.baseUrl}/smartphones/realmenote50.jpg`,
      name: 'Realme Note 50',
      description: "Смартфон Realme Note 50 диагональю 6.7'' с защитой по стандарту IP54.",
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/realme-note-50-4-gb-128-gb-chernyi-116138550/?c=750000000'
    },
    {
      id: 15,
      categoryId: 1,
      likes: 0,
      image: `${this.baseUrl}/smartphones/samsungs24ultra5g.jpg`,
      name: 'Samsung Galaxy S24 Ultra 5G',
      description: "Смартфон с лучшей в отрасли камерой, характеристиками и новым AI Galaxy AI.",
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000'
    },

    // 2. LAPTOPS: ---------------------------------------------------------------------------------------
    {
      id: 21,
      categoryId: 2,
      likes: 0,
      image: `${this.baseUrl}/laptops/wildhunter.jpg`,
      name: 'ThundeRobot 911 X Wild Hunter G2 Pro',
      description: "Отличный ноутбук, если ищите вариант для приятной работы, где все будет летать.",
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000'
    },
    {
      id: 22,
      categoryId: 2,
      likes: 0,
      image: `${this.baseUrl}/laptops/applemacbook.jpg`,
      name: 'Apple MacBook Air 13 2022',
      description: "MacBook Air 2022 года можно назвать одним из крупнейших обновлений линейки за всю историю.",
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
    },
    {
      id: 23,
      categoryId: 2,
      likes: 0,
      image: `${this.baseUrl}/laptops/ideapad3.jpg`,
      name: 'Lenovo IdeaPad 3',
      description: "Теперь вы самостоятельно будете определять режим работы своей системы.",
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000'
    },
    {
      id: 24,
      categoryId: 2,
      likes: 0,
      image: `${this.baseUrl}/laptops/hydrah20.jpeg`,
      name: 'HYDRA H20',
      description: "Ноутбуки HYDRA это Казахстанский бренд электроники и гаджетов для дома.",
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/hydra-h20-15-6-12-gb-ssd-512-gb-win-11-mkii-115019992/?c=750000000'
    },
    {
      id: 25,
      categoryId: 2,
      likes: 0,
      image: `${this.baseUrl}/laptops/aceraspire3.jpg`,
      name: 'Acer Aspire 3 ',
      description: "Получайте актуальную информацию благодаря широким возможностям подключения.",
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000'
    },

    // 3. VIDEOGAMES: ------------------------------------------------------------------------------------
    {
      id: 31,
      categoryId: 3,
      likes: 0,
      image: `${this.baseUrl}/videogames/blackmythwukong.jpeg`,
      name: 'Black Myth: Wukong',
      description: "Black Myth: Wukong — ролевой боевик по мотивам китайской мифологии.",
      rating: 5,
      link: 'https://kaspi.kz/shop/p/black-myth-wukong-ps5-rus-131674452/?c=750000000'
    },
    {
      id: 32,
      categoryId: 3,
      likes: 0,
      image: `${this.baseUrl}/videogames/metroexodus.jpg`,
      name: 'Metro Exodus',
      description: "«Метро: Исход» – это эффектный шутер от первого лица с захватывающим сюжетом.",
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/metro-exodus-metro-ishod---polnoe-izdanie-ps5-rus-101937817/?c=750000000'
    },
    {
      id: 33,
      categoryId: 3,
      likes: 0,
      image: `${this.baseUrl}/videogames/godofwarr.jpg`,
      name: 'God of War Ragnarök',
      description: "Студия Santa Monica подготовила продолжение знаменитой игры God of War.",
      rating: 5,
      link: 'https://kaspi.kz/shop/p/god-of-war-ragnar-k-ps5-rus-106671793/?c=750000000'
    },
    {
      id: 34,
      categoryId: 3,
      likes: 0,
      image: `${this.baseUrl}/videogames/codmw2.jpg`,
      name: 'Call of Duty: Modern Warfare II',
      description: "Оперативная тактическая группа 141 возвращается с отрядом легендарных ветеранов.",
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/call-of-duty-modern-warfare-ii-ps5-rus-106671798/?c=750000000'
    },
    {
      id: 35,
      categoryId: 3,
      likes: 0,
      image: `${this.baseUrl}/videogames/atomicheart.jpg`,
      name: 'Atomic Heart',
      description: "Добро пожаловать в дивный мир совершенства и технологий, где люди живут бок о бок с роботами!",
      rating: 5,
      link: 'https://kaspi.kz/shop/p/atomic-heart-ps5-rus-109002849/?c=750000000'
    },

    // 4. BOOKS: ------------------------------------------------------------------------------------------

    {
      id: 41,
      categoryId: 4,
      likes: 0,
      image: `${this.baseUrl}/books/catsdiseappear.jpg`,
      name: 'Если все кошки в мире исчезнут',
      description: "Это согревающая, забавная и глубокая книга о смысле жизни.",
      rating: 5,
      link: 'https://kaspi.kz/shop/p/kavamura-genki-esli-vse-koshki-v-mire-ischeznut-110275073/?c=750000000'
    },
    {
      id: 42,
      categoryId: 4,
      likes: 0,
      image: `${this.baseUrl}/books/tennegros.jpg`,
      name: 'Десять негритят',
      description: "Роман 'Десять негритят' – один из величайших детективов в истории.",
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/kristi-a-desjat-negritjat-100329448/?c=750000000'
    },
    {
      id: 43,
      categoryId: 4,
      likes: 0,
      image: `${this.baseUrl}/books/crowking.jpg`,
      name: 'Король Воронов',
      description: "'Король Воронов' - продолжение бестселлера Норы Сакавич 'Лисья нора'",
      rating: 5,
      link: 'https://kaspi.kz/shop/p/sakavich-n-korol-voronov-100752288/?c=750000000'
    },
    {
      id: 44,
      categoryId: 4,
      likes: 0,
      image: `${this.baseUrl}/books/littlewomen.jpg`,
      name: 'Маленькие женщины',
      description: "История семейства Марч, где подрастают четыре дружные, но непохожие сестры.",
      rating: 5,
      link: 'https://kaspi.kz/shop/p/olkott-l-m-malen-kie-zhenschiny-110124812/?c=750000000'
    },
    {
      id: 45,
      categoryId: 4,
      likes: 0,
      image: `${this.baseUrl}/books/lifeforsale.jpg`,
      name: 'Жизнь на продажу',
      description: "Юкио Мисима — самый знаменитый и читаемый в мире японский писатель.",
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/misima-ju-zhizn-na-prodazhu-104154574/?c=750000000'
    }

  ];

  // Remove a product by ID
  removeProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId)
  }

  // Method for handling "Like" button
  increaseLikes(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }

  // Get all products
  getProducts(): ProductInformation[] {
    return this.products;
  }

}
