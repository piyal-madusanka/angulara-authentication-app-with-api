import { Component, OnInit } from '@angular/core';
import {ShoweventsService} from '../showevents.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  constructor(private _eventservise:ShoweventsService,private _router:Router) { }
  events=[]
  ngOnInit(): void {
    this._eventservise.getSpecialEvents().subscribe(
      res =>this.events=res,
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status ===401){
            this._router.navigate(['/login'])
          }
        }
      }
    )
  }

}
