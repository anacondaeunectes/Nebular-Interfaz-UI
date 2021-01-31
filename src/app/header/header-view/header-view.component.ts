import { Component, OnInit } from '@angular/core';
import { BasketServService } from 'src/app/basket/basket-serv.service';
import { HeaderServService } from '../header-serv.service';

@Component({
  selector: 'app-header-view',
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.scss']
})
export class HeaderViewComponent implements OnInit {

  constructor(public headerService:HeaderServService, public basketService:BasketServService) { }

  ngOnInit(): void {
  }

}
