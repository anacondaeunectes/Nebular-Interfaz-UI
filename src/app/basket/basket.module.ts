import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule, NbBadgeModule, NbButtonModule } from '@nebular/theme';

import { BasketViewComponent } from './basket-view/basket-view.component';


@NgModule({
  declarations: [BasketViewComponent],
  imports: [
    CommonModule,
    NbIconModule,
    NbBadgeModule,
    NbButtonModule
  ],
  exports: [
    BasketViewComponent
  ]
})
export class BasketModule { }
