import { Component, OnInit } from '@angular/core';
import { BasketServiceService } from '../basket-service.service';

@Component({
  selector: 'app-basket-view',
  templateUrl: './basket-view.component.html',
  styleUrls: ['./basket-view.component.scss']
})
export class BasketViewComponent implements OnInit {

  constructor(public basketService: BasketServiceService) { }

  ngOnInit(): void {
    console.log(this.basketService);
    console.log('asd')
  }

}
