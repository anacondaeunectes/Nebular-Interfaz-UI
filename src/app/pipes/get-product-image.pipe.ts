import { Pipe, PipeTransform } from '@angular/core';
import { ProductsServService } from '../products/products-serv.service';

@Pipe({
  name: 'getProductImage'
})
export class GetProductImagePipe implements PipeTransform {

  constructor(public productService: ProductsServService) {}

  transform(value: number): string {
    return this.productService.getImageById(value);
  }

}
