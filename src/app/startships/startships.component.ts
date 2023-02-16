import { Api_requests_models } from './api_requests.model';
import { Request_Shipments, Shipments } from './../interface/interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-startships',
  templateUrl: './startships.component.html',
  styleUrls: ['./startships.component.scss']
})
export class StartshipsComponent implements OnInit {

  resultados!: any;
  ships!: Array<Shipments>;

  constructor(private request: Api_requests_models) {
  }

  ngOnInit() {
    let array_to_Front: Shipments[] = [];
    this.request.get_StarShipments().subscribe((data) => {
      this.resultados = data.results; 
      this.resultados.forEach((ship: Shipments) => {
        array_to_Front.push({
          name: ship.name, 
          img: ship.img, 
          desc: ship.desc, 
          model: ship.model, 
          manufacturer: ship.manufacturer, 
          cost_in_credits: ship.cost_in_credits, 
          length: ship.length, 
          max_atmosphering_speed: ship.max_atmosphering_speed, 
          crew: ship.crew, 
          passengers: ship.passengers, 
          cargo_capacity: ship.cargo_capacity, 
          consumables: ship.consumables, 
          hyperdrive_rating: ship.hyperdrive_rating,
          starship_class: ship.starship_class, 
          pilots: ship.pilots, 
          films: ship.films, 
          created: ship.created, 
          edited: ship.edited, 
          url: ship.url});
      });

    });
    this.ships = array_to_Front;
  }

}

