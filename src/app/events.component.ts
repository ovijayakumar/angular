import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template:``,
  // styles:["div{color:red}"]
  templateUrl: './events.component.html',
  // styleUrls: ['./app.component.css']
})
export class EventsComponent {
  title = 'conference-prj';
  event={
    id:1,
    name:'Angular Connnect',
    date:'9/26/2019',
    time:'10 am',
    price: 234.55,
    imageUrl: 'assets/images/angularconnect-shield.ng',
    location:{
      address:'1057 DT',
      city:'London',
      country:'England'
    }
  }
}
