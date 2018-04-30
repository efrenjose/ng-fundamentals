import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsComponent,
    EventsListComponent,
    EventsThumbnailComponent
  ],
  providers: [],
  bootstrap: [EventsComponent]
})
export class AppModule { }
