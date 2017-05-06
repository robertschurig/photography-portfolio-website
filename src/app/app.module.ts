import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {routing} from './app.routing';
import {SportComponent} from './sport/sport.component';
import {HttpModule} from '@angular/http';
import {HomeService} from './home/home.service';
import {PageNotFoundComponent} from './pagenotfound/page-not-found.component';
import {SportService} from './sport/sport.service';
import {SharedModule} from './shared/shared.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SportComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  providers: [
    SportService,
    HomeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
  }
}