import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderViewComponent } from './header-view/header-view.component';
import { AppRoutingModule } from '../app-routing.module';

import { NbMenuModule, NbIconModule, NbBadgeModule, NbToggleModule } from "@nebular/theme";


@NgModule({
  declarations: [HeaderViewComponent],
  imports: [
    CommonModule,
    NbMenuModule,
    NbIconModule,
    NbBadgeModule,
    NbToggleModule,
    AppRoutingModule
  ],
  exports: [
    HeaderViewComponent
  ]
})
export class HeaderModule { }
