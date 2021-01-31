import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsViewComponent } from './products-view/products-view.component';
import { NbIconModule, NbButtonModule, NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [ProductsViewComponent],
  imports: [
    CommonModule,
    NbIconModule,
    NbButtonModule,
    NbCardModule
  ],
  exports: [
    ProductsViewComponent
  ]
})
export class ProductsModule { }
