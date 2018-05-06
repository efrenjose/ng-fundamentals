import { EventService } from './../shared/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'events-detail.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; } 
    `]
})

export class EventsDetailComponent implements OnInit {

event:any
    
    constructor(private eventService: EventService) { }

    ngOnInit() {
        this.event = this.eventService.getEvent(1)
     }          

}