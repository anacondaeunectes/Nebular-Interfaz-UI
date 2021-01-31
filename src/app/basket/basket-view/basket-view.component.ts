import { Component, OnInit } from '@angular/core';
import { BasketServService } from '../basket-serv.service';


@Component({
  selector: 'app-basket-view',
  templateUrl: './basket-view.component.html',
  styleUrls: ['./basket-view.component.scss']
})
export class BasketViewComponent implements OnInit {

  constructor(public basketService:BasketServService) { }

  ngOnInit(): void {
    // console.log(this.basketService);
    console.log('asd')
  }

}
