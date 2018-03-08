import { RouterModule, Routes } from '@angular/router';
import { PortraitComponent } from './portrait.component';


const routes: Routes = [
  { path: 'portrait', component: PortraitComponent }
];

export const routing = RouterModule.forRoot(routes);
