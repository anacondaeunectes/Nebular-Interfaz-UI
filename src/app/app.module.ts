import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BasketModule } from '../app/basket/basket.module';
import { HeaderModule } from "../app/header/header.module";
import { ProductsModule } from "../app/products/products.module";
import { ContactUsModule } from "../app/contact-us/contact-us.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbToastrModule, NbDialogModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { GetProductPricePipe } from './pipes/get-product-price.pipe';
// import { GetProductNamePipe } from './pipes/get-product-name.pipe';
// import { GetProductImagePipe } from './pipes/get-product-image.pipe';
// import { GetProductPipe } from './pipes/get-product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GetProductPricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    BasketModule,
    HeaderModule,
    ContactUsModule,
    ProductsModule,
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
