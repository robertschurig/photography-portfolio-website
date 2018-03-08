import { RouterModule, Routes } from '@angular/router';
import { SportComponent } from './sport.component';


const routes: Routes = [
  { path: 'sport', component: SportComponent },
];

export const routing = RouterModule.forRoot(routes);
