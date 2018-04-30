import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsComponent,
    EventsListComponent
  ],
  providers: [],
  bootstrap: [EventsComponent]
})
export class AppModule { }
