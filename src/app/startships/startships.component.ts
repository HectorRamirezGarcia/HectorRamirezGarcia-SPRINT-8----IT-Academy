import { Api_requests_models } from './api_requests.model';
import { Shipments } from './../interface/interface';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-startships',
  templateUrl: './startships.component.html',
  styleUrls: ['./startships.component.scss']
})
export class StartshipsComponent implements OnInit {

  resultados!: any;
  ships!: Array<Shipments>;
  ship!: Shipments;

  pageWeb = 1;

  constructor(private request: Api_requests_models, private modalService: NgbModal) {
  }

  ngOnInit() {
    let array_to_Front: Shipments[] = [];
    this.request.get_StarShipments(this.pageWeb).subscribe((data) => {
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
          MGLT: ship.MGLT,
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

  show_Ship(id: number) {
    this.ship = this.ships[id];
  }

  openModal(content: any, id: number) {
    this.show_Ship(id);
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true});
    
	}

  onScroll(): void {
    
    this.request.get_StarShipments(++this.pageWeb).subscribe((data) => {
      this.resultados = data.results; 
      this.resultados.forEach((ship: Shipments) => {
        this.ships.push({
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
          MGLT: ship.MGLT,
          starship_class: ship.starship_class, 
          pilots: ship.pilots, 
          films: ship.films, 
          created: ship.created, 
          edited: ship.edited, 
          url: ship.url});
      });

    });
  
  }




}

