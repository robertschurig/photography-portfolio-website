import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';


const routes: Routes = [
  { path: 'contact', component: ContactComponent }
];

export const routing = RouterModule.forRoot(routes);
