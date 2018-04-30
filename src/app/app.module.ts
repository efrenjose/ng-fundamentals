import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EventsComponent } from './events-app.component';


@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsComponent]
})
export class AppModule { }
