import { Component, OnInit } from '@angular/core';
import { SeriesService } from './series.service';
import { IImage, IImages, IProjects } from '../shared/image-list.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'series',
  templateUrl: 'series.component.html',
  styleUrls: ['series.component.scss'],
})
export class SeriesComponent implements OnInit {
  private projectImages: IImages;
  private projects: Observable<IProjects>;
  private selectedImage: IImage = {
    source: '',
    thumb: '',
    title: '',
  };
  private modalActive: boolean;
  private selectedImageIndex: number;

  constructor(private apiService: SeriesService) {
  }

  ngOnInit() {
    this.projects = this.apiService.getProjects();
  }

  openModal(projectImages: IImages, index: number): void {
    this.projectImages = projectImages;
    this.selectImage(index);
    this.modalActive = true;
  }

  closeModal() {
    this.modalActive = false;
  }

  nextImage() {
    if (this.selectedImageIndex >= this.projectImages.length - 1) {
      this.selectImage(0);
      return;
    }

    this.selectImage(this.selectedImageIndex + 1);
  }

  prevImage() {
    if (this.selectedImageIndex <= 0) {
      this.selectImage(this.projectImages.length - 1);
      return;
    }

    this.selectImage(this.selectedImageIndex - 1);
  }

  private selectImage(index: number) {
    this.selectedImageIndex = index;
    this.selectedImage = this.projectImages[this.selectedImageIndex];
  }
}
