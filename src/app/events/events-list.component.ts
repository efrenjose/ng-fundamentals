import { Component, OnInit } from "@angular/core";
import { EventService } from './shared/events.service';

@Component({
    selector: 'events-list',
    template: `<div>
                <h1>Upcoming Angular Events</h1>
                <hr/>
                <div class="row">
                    <div class= "col-md-5" *ngFor="let event of events">
                        <events-thumbnail [event]="event"></events-thumbnail>
                    </div>
                </div>
                </div>
             `
})

export class EventsListComponent implements OnInit {

    events:any[]

    constructor(private eventService: EventService) {
        
    }

    ngOnInit() {
        this.events = this.eventService.getEvents()
    }
}