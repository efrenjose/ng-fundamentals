import { EventListResolver } from './app/events/event-list-resolver.service';
import { EventRouteActivator } from './app/events/event-details/event-route-service';
import { Routes } from '@angular/router'
import { EventsListComponent } from './app/events/events-list.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { EventCreateComponent } from './app/events/event-create.component';
import { Error404Component } from './app/errors/404.component';

export const appRoutes:Routes = [
    { path: 'events/new', component: EventCreateComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component},
    { path: '', pathMatch: 'full', redirectTo: '/events' }  
]