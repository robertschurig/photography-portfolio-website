import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {SportComponent} from './sport/sport.component';
import {PageNotFoundComponent} from './pagenotfound/page-not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sport', component: SportComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(routes);
