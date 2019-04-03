import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsComponent } from './events.component';
import { NavBarComponent } from './navbar/nav-bar.component';

@NgModule({
  declarations: [
    EventsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EventsComponent]
})
export class AppModule { }
