import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { routing } from './contact.routing';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [
    ContactComponent,
  ],
})

export class ContactModule {
}
