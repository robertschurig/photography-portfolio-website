import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { take } from 'rxjs/operators';

import {IImage, IImages} from '../shared/image-list.interface';
import {HomeService} from './home.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  private images: IImages;

  constructor(private service: HomeService) {
  }

  ngOnInit() {
    this.service.getPortraits()
      .take(1)
      .subscribe(result => {
        this.images = result.images;
      });
  }
}
