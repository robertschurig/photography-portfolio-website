import {Component, OnInit} from '@angular/core';
import {IImage, IImages} from '../shared/image-list.interface';
import {Observable} from 'rxjs';
import {HomeService} from './home.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  private images: Observable<IImages>;
  private selectedImage: IImage = {
    source: '',
    thumb: '',
    title: ''
  };
  private modalActive: boolean;

  constructor(private service: HomeService) {
  }

  ngOnInit() {
    this.images = this.service.getPortraits();
  }

  openModal(item: IImage): void {
    this.selectedImage = item;
    this.modalActive = true;
  }

  closeModal() {
    this.modalActive = false;
  }
}
