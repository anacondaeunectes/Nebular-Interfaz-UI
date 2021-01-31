import { Injectable } from '@angular/core';
import { BasketReference } from '../models/basketReference.model';
import { Product } from '../models/product.model';
import { ProductsServService } from '../products/products-serv.service';
import { NbToastrService } from '@nebular/theme';


@Injectable({
  providedIn: 'root'
})
export class BasketServService {

  constructor(public productService: ProductsServService, public toastrService: NbToastrService){ }

  basketProducts:BasketReference[] = [
    // {
    //   product_ref: 10,
    //   basketNumber: 0
    // },
    // {
    //   product_ref: 11,
    //   basketNumber: 0
    // },
    // {
    //   product_ref: 12,
    //   basketNumber: 0
    // },
    // {
    //   product_ref: 13,
    //   basketNumber: 0
    // },
    // {
    //   product_ref: 14,
    //   basketNumber: 0
    // },
    // {
    //   product_ref: 15,
    //   basketNumber: 0
    // }
  ];


  addProductToBasket({name, product_id}){

    let index:number = this.basketProducts.findIndex( x => x.product_ref == product_id);

    console.log(index)

    this.showToastr(name, 'bottom-left');

    if (index != -1) {
      this.basketProducts[index].basketNumber++;
      console.log('existe');
    } else {
      this.basketProducts.push(
        {
          product_ref: product_id,
          basketNumber: 1
        });
    }
  }

  getProductsByReference():Product[]{

    return this.basketProducts.map( x => this.productService.products.find( y => y.product_id == x.product_ref));
  }

  getTotalProductsBasket() {
    return this.basketProducts.reduce( ( accumulator, currentValue ) => accumulator + currentValue.basketNumber,
    0 )
  }

  showToastr(name:string, position){
    this.toastrService.success("",`The product ${name} has been added to basket`, { position });
  }

  // buildBasketReferenceTemplate(){


  // }

}
