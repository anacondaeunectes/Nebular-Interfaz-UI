import { Injectable } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class HeaderServService {

  constructor(public themeService: NbThemeService) { }

  // Swap theme between default and dark theme
  changeTheme(){
    if (this.themeService.currentTheme == 'default') {
    this.themeService.changeTheme('dark');
    } else {
    this.themeService.changeTheme('default');
    }
  }
}
