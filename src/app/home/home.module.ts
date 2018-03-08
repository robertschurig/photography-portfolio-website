import { NgModule } from '@angular/core';
import { ImageGridModule } from '../shared/image-grid/image-grid.module';
import { routing } from './home.routing';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ImageGridModule,
    routing
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    HomeService
  ]
})

export class HomeModule {
}