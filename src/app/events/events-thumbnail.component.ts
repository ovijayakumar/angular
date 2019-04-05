import { Component, Input } from '@angular/core';

@Component({
    selector:'events-thumbnail',
    template:`
    <div class="well hoverwell thumbnail">
        <h2>{{event?.name | uppercase}}</h2>
        <div >Date: {{event?.date}}</div>
        <div [ngClass]="getStartTimingStyles2()"
         [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div [hidden]="!event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span>&nbsp;</span>
            <span>{{event?.location?.city}},{{event?.location?.country}}</span>
        </div>
        <div [hidden]="!event?.onlineUrl">
        <span>OnlineURL: {{event?.onlineUrl}}</span>
        </div>
    </div>
    `,
    styles :[`
        .green{color:yellow !important;}
        .bold{font-weight:bold !important;}
        .thumbnail{min-height:210px;}
        .pad-left{margin-left:10px;}
        .well div{color:#bbb;}
    `]

})
export class EventsThumbnailComponent{
    @Input()event:any;    
// [class.green]="event?.time=='8:00 am'" [class.bold]="event?.time=='8:00 am'"
// {green: event?.time==='8:00 am',bold : event?.time==='8:00 am'}
    getStartTimingStyles(){
        const isEarlyStart=this.event && this.event.time==="8:00 am";
        return {green:isEarlyStart,bold:isEarlyStart}
    }
    getStartTimingStyles1(){
        if(this.event && this.event.time==="8:00 am")
            return 'green bold'
        return '';
    }
    getStartTimingStyles2(){
        if(this.event && this.event.time==="8:00 am")
            return ['green', 'bold']
        return [];
    }
}