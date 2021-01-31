import { Pipe, PipeTransform } from '@angular/core';
import { ProductsServService } from '../products/products-serv.service';

@Pipe({
  name: 'getProductName'
})
export class GetProductNamePipe implements PipeTransform {

  constructor(public productService: ProductsServService) {}

  transform(value: number): string {
    console.log(this.productService.getNameById(value));
    return this.productService.getNameById(value);
  }

}
