import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EventsComponent } from './events-app.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsComponent
  ],
  providers: [],
  bootstrap: [EventsComponent]
})
export class AppModule { }
