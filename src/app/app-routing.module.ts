import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketViewComponent } from './basket/basket-view/basket-view.component';
import { ContactViewComponent } from './contact-us/contact-view/contact-view.component';
import { ProductsViewComponent } from './products/products-view/products-view.component';

const routes: Routes = [
  {path: 'basket', component: BasketViewComponent},
  {path: 'products', component: ProductsViewComponent},
  {path: 'contact', component: ContactViewComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full' },
  {path: '**', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
