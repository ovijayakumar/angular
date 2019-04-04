import { Component, Input } from '@angular/core';

@Component({
    selector:'events-thumbnail',
    template:`
    <hr/>
    <div class="well hoverwell thumbnail">
        <h2>{{event.name | uppercase}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: {{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}},{{event.location.country}}</span>
        </div>
    </div>
    `
})
export class EventsThumbnailComponent{
    @Input()event:any;    
}