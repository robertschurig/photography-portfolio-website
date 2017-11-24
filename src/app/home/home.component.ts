import {Component, OnInit} from '@angular/core';
import {IImage, IImages} from '../modules/image-list.interface';
import {Observable} from 'rxjs';
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
      .subscribe((result: IImages) => {
        this.images = result;
      });
  }
}
