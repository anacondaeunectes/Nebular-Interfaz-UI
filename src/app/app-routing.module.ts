import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketViewComponent } from './basket/basket-view/basket-view.component';

const routes: Routes = [
  {path: 'basket', component: BasketViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
