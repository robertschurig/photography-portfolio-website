import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeService } from './home.service';
import { IImages } from '../shared/image-list.interface';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  public images: Observable<IImages>;

  constructor(private service: HomeService) {
  }

  ngOnInit() {
    this.images = this.service.getPortraits();
  }
}
