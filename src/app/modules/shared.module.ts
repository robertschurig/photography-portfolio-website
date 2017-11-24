import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageGridComponent} from './image-grid/image-grid.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ImageGridComponent
  ],
  exports: [
    ImageGridComponent
  ]
})

export class SharedModule {
}