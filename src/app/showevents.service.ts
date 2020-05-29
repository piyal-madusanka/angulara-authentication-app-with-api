import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ShoweventsService {
  private _eventUrl="http://localhost:3000/api/events";
  private _specialUrl="http://localhost:3000/api/special";

  constructor(private http:HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventUrl);
  }
  getSpecialEvents(){
    return this.http.get<any>(this._specialUrl);
  }
}
