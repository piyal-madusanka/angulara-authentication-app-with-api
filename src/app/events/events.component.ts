import { Component, OnInit } from '@angular/core';
import {ShoweventsService} from '../showevents.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  events=[]
  constructor(private _eventservise:ShoweventsService) { }

  ngOnInit(): void {
    this._eventservise.getEvents().subscribe(
      res =>this.events=res,
      err => console.log(err)
    )
  }

}
