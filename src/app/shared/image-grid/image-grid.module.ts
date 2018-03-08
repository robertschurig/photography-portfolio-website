import { NgModule } from '@angular/core';
import { ImageGridComponent } from './image-grid.component';
import { ImageGridItemComponent } from './image-grid-item/image-grid-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:[
    CommonModule
  ],
  declarations: [
    ImageGridComponent,
    ImageGridItemComponent
  ],
  exports: [
    ImageGridComponent
  ]
})

export class ImageGridModule {
}