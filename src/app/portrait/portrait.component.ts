import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IImages } from '../shared/image-list.interface';
import { PortraitService } from './portrait.service';

@Component({
  selector: 'home',
  templateUrl: 'portrait.component.html',
})
export class PortraitComponent implements OnInit {
  public images: Observable<IImages>;

  constructor(private service: PortraitService) {
  }

  ngOnInit() {
    this.images = this.service.getPortraits();
  }
}
