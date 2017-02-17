import { Component, OnInit } from '@angular/core';
import {SportService} from './sport.service';
import {IImage, IProjects} from '../shared/image-list.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'sport',
  templateUrl: 'sport.component.html',
  styleUrls: ['sport.component.scss']
})
export class SportComponent implements OnInit {

  private projects: Observable<IProjects>;
  private selectedImage: IImage = {
    source: '',
    thumb: '',
    title: ''
  };
  private modalActive: boolean;

  constructor(private apiService: SportService) {
  }

  ngOnInit() {
    this.projects = this.apiService.getProjects();
  }

  openModal(item: IImage): void {
    this.selectedImage = item;
    this.modalActive = true;
  }

  closeModal() {
    this.modalActive = false;
  }

}
