import { Component, OnInit } from '@angular/core';
import { BasketServService } from 'src/app/basket/basket-serv.service';
import { ProductsServService } from '../products-serv.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit {

  constructor(public productService:ProductsServService, public basketService:BasketServService) { }

  ngOnInit(): void {
  }

}
