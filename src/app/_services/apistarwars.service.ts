import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request_Shipments } from '../_models';

@Injectable()
export class ApistarwarsService {
  
    constructor(public http : HttpClient){}
  
    get_StarShipments(pageNumber: number): Observable<any> {
      return this.http.get<Request_Shipments>(`https://starpi.herokuapp.com/starpi/starships/${pageNumber}`);
    }

}