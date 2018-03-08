import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

export const routing = RouterModule.forRoot(routes);
