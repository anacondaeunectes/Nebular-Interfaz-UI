import { Component, OnInit } from '@angular/core';
import { HeaderServService } from '../header-serv.service';

@Component({
  selector: 'app-header-view',
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.scss']
})
export class HeaderViewComponent implements OnInit {

  constructor(public headerService:HeaderServService) { }

  ngOnInit(): void {
  }

  test(){
    console.log('piksd');
  }

}
