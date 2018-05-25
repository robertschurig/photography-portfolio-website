import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { PageNotFoundComponent } from './pagenotfound/page-not-found.component';
import { ImageGridModule } from './shared/image-grid/image-grid.module';
import { HomeModule } from './home/home.module';
import { PortraitModule } from './portrait/portrait.module';
import { ContactModule } from './contact/contact.module';
import { SeriesModule } from './series/series.module';
import { SportModule } from './sport/sport.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    routing,

    ImageGridModule,
    HomeModule,
    PortraitModule,
    ContactModule,
    SeriesModule,
    SportModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor() {
  }
}
