import { NgModule } from '@angular/core';
import { routing } from './series.routing';
import { SeriesComponent } from './series.component';
import { SeriesService } from './series.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [
    SeriesComponent,
  ],
  providers: [
    SeriesService,
  ],
})

export class SeriesModule {
}
