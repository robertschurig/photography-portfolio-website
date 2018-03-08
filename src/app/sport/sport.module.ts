import { NgModule } from '@angular/core';
import { routing } from './sport.routing';
import { SportComponent } from './sport.component';
import { SportService } from './sport.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    SportComponent
  ],
  providers: [
    SportService
  ]
})

export class SportModule {
}