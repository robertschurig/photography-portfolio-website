import { NgModule } from '@angular/core';
import { ImageGridModule } from '../shared/image-grid/image-grid.module';
import { routing } from './portrait.routing';
import { PortraitService } from './portrait.service';
import { PortraitComponent } from './portrait.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ImageGridModule,
    routing
  ],
  declarations: [
    PortraitComponent
  ],
  providers: [
    PortraitService
  ]
})

export class PortraitModule {
}