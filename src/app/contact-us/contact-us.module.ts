import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { NbCardModule, NbButtonModule } from '@nebular/theme';




@NgModule({
  declarations: [ContactViewComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule
  ],
  exports: [
    ContactViewComponent
  ]
})
export class ContactUsModule { }
