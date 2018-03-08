import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './series.component';


const routes: Routes = [
  { path: 'series', component: SeriesComponent },
];

export const routing = RouterModule.forRoot(routes);
