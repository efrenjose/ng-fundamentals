import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Providers
import { EventService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';
import { EventRouteActivator } from './events/event-details/event-route-service';

//Components
import { EventsComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventCreateComponent } from './events/event-create.component';
import { Error404Component } from './errors/404.component';

//Routes
import { appRoutes } from '../routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    EventCreateComponent,
    Error404Component,
    NavBarComponent
  ],
  providers: [EventService, ToastrService, EventRouteActivator],
  bootstrap: [EventsComponent]
})
export class AppModule { }
