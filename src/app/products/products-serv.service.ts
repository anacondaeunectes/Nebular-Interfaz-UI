import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsServService {

  constructor() { }

  products: Product[] = [
    {
      name: 'Armonica',
      product_id: 10,
      price: 19.99,
      description: 'A normal harmonica',
      detailedDescription: 'A very normal harmonica',
      img_src: './assets/imgs/Harmonica.jpg'
    },
    {
      name: 'Piano',
      product_id: 11,
      price: 635.0,
      description: 'A normal piano',
      detailedDescription: 'A very normal piano',
      img_src: './assets/imgs/Piano.jpg'
    },
    {
      name: 'Bajo',
      product_id: 12,
      price: 190.00,
      description: 'A normal bass',
      detailedDescription: 'A very normal bass',
      img_src: './assets/imgs/bass.png'
    },
    {
      name: 'Harp',
      product_id: 13,
      price: 19.99,
      description: 'A normal harp',
      detailedDescription: 'A very normal harp',
      img_src: './assets/imgs/Harp.jpg'
    },
    {
      name: 'Trombone',
      product_id: 14,
      price: 635.0,
      description: 'A normal trombone',
      detailedDescription: 'A very normal trombone',
      img_src: './assets/imgs/Trombone.jpg'
    },
    {
      name: 'Xylophone',
      product_id: 15,
      price: 190.00,
      description: 'A normal xylophone',
      detailedDescription: 'A very normal xylophone',
      img_src: './assets/imgs/Xylophone.jpg'
    }
  ];

  getNameById(id:number):string {
    console.log(id)
    return this.products.find( x => x.product_id == id).name;
  }

  getImageById(id:number):string {
    return this.products.find( x => x.product_id == id).img_src;
  }

  getPriceById(id:number):number {
    return this.products.find( x => x.product_id == id).price;
  }

}
