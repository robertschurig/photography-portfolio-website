import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

import { IImages } from '../shared/image-list.interface';
import { PortraitService } from './portrait.service';

@Component({
  selector: 'home',
  templateUrl: 'portrait.component.html',
})
export class PortraitComponent implements OnInit {
  private images: IImages;

  constructor(private service: PortraitService) {
  }

  ngOnInit() {
    this.service.getPortraits()
      .take(1)
      .subscribe(result => this.images = result.images);
  }
}
