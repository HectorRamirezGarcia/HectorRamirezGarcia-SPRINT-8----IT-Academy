
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request_Shipments } from '../interface/interface';
import { Observable } from 'rxjs';


@Injectable()
export class Api_requests_models {
  
  constructor(public http : HttpClient){}

  get_StarShipments(pageNumber: number): Observable<any> {
    return this.http.get<Request_Shipments>(`https://starpi.herokuapp.com/starpi/starships/${pageNumber}`);
  }
}