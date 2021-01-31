import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule, NbButtonModule, NbListModule, NbCardModule, NbStepperModule, NbInputModule } from '@nebular/theme';

import { BasketViewComponent } from './basket-view/basket-view.component';
import { GetProductNamePipe } from '../pipes/get-product-name.pipe';
import { GetProductImagePipe } from '../pipes/get-product-image.pipe';


@NgModule({
  declarations: [
    BasketViewComponent,
    GetProductNamePipe,
    GetProductImagePipe
  ],
  imports: [
    CommonModule,
    NbIconModule,
    NbButtonModule,
    NbListModule,
    NbCardModule,
    NbStepperModule,
    NbInputModule
  ],
  exports: [
    BasketViewComponent
  ]
})
export class BasketModule { }
