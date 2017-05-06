import {Component, OnInit, Input} from '@angular/core';
import {IImage, IImages} from '../image-list.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'image-grid',
  templateUrl: 'image-grid.component.html',
  styleUrls: ['image-grid.component.scss'],
})
export class ImageGridComponent implements OnInit {
  @Input() images: IImages;

  private selectedImage: IImage;
  private selectedImageIndex: number;
  private modalActive: boolean;

  ngOnInit() {
    this.selectedImage = {
      source: '',
      thumb: '',
      title: ''
    };
  }

  openModal(index: number): void {
    this.selectImage(index);
    this.modalActive = true;
  }

  private selectImage(index: number) {
    this.selectedImageIndex = index;
    this.selectedImage = this.images[this.selectedImageIndex];
  }

  nextImage() {
    if (this.selectedImageIndex >= this.images.length - 1) {
      this.selectImage(0);
      return;
    }

    this.selectImage(this.selectedImageIndex + 1);
  }

  prevImage() {
    if (this.selectedImageIndex <= 0) {
      this.selectImage(this.images.length - 1);
      return;
    }

    this.selectImage(this.selectedImageIndex - 1);
  }

  closeModal() {
    this.modalActive = false;
  }
}