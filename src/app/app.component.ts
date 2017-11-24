import {Component} from '@angular/core';

import '../global.scss';

@Component({
  selector: 'portfolio-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public mobileMenuActive: boolean;

  constructor() {
  }
}
