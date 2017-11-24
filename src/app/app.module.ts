import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { routing } from './app.routing';
import { SportComponent } from './sport/sport.component';
import { HttpModule } from '@angular/http';
import { HomeService } from './home/home.service';
import { PageNotFoundComponent } from './pagenotfound/page-not-found.component';
import { SportService } from './sport/sport.service';
import { SharedModule } from './modules/shared.module';
import { SeriesComponent } from './series/series.component';
import { SeriesService } from './series/series.service';
import { SVGModule } from './modules/svg-module/svg-module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    SharedModule,
    SVGModule
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