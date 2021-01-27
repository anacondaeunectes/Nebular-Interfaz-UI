import { Injectable } from '@angular/core';
import { NbThemeModule, NbThemeService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class HeaderServService {

  basketCount: number = 0;

  constructor(public themeService: NbThemeService) { }

  // Add one unit to basket counter
  addUnit_Basket(){
    this.basketCount++;
  }

  // Reset to backetCount to 0
  resetBasketCount(){
    this.basketCount = 0;
  }

  // Swap theme between default and dark theme
  changeTheme(){
    if (this.themeService.currentTheme == 'default') {
    this.themeService.changeTheme('dark');
    } else {
    this.themeService.changeTheme('default');
    }
  }
}
