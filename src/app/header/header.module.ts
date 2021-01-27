import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderViewComponent } from './header-view/header-view.component';

import { NbMenuModule, NbIconModule, NbBadgeModule, NbToggleModule } from "@nebular/theme";



@NgModule({
  declarations: [HeaderViewComponent],
  imports: [
    CommonModule,
    NbMenuModule,
    NbIconModule,
    NbBadgeModule,
    NbToggleModule
  ],
  exports: [
    HeaderViewComponent
  ]
})
export class HeaderModule { }
