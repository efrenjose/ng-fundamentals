import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Providers
import { EventService } from './events/shared/events.service';

//Components
import { EventsComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent
  ],
  providers: [EventService],
  bootstrap: [EventsComponent]
})
export class AppModule { }
