import { Pipe, PipeTransform } from '@angular/core';
import { ProductsServService } from '../products/products-serv.service';

@Pipe({
  name: 'getProductPrice'
})
export class GetProductPricePipe implements PipeTransform {

  constructor(public productService: ProductsServService) {}

  transform(value: number): number {
    return this.productService.getPriceById(value);
  }

}
