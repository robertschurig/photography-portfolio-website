import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { routing } from './app.routing';
import { SportComponent } from './sport/sport.component';
import { HomeService } from './home/home.service';
import { PageNotFoundComponent } from './pagenotfound/page-not-found.component';
import { SportService } from './sport/sport.service';
import { SharedModule } from './shared/shared.module';
import { SeriesComponent } from './series/series.component';
import { SeriesService } from './series/series.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SportComponent,
    SeriesComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  providers: [
    SportService,
    SeriesService,
    HomeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
  }
}
