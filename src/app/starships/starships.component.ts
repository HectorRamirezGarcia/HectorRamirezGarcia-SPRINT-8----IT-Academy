import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Shipments, User } from '../_models';
import { AccountService, ApistarwarsService } from '../_services';

@Component({ templateUrl: 'starships.component.html' })
export class StarshipsComponent implements OnInit{
    user: User | null;
    ships!: Array<Shipments>;
    ship!: Shipments;
    pageWeb = 1;
    resultados!: any;

    constructor(private accountService: AccountService, private modalService: NgbModal, private request: ApistarwarsService) {
        this.user = this.accountService.userValue;
    }

    ngOnInit() {
        let array_to_Front: Shipments[] = [];
        this.get_Ships(this.pageWeb);
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
        let next_page = this.pageWeb++;
        if(next_page < 5){ this.get_Ships(next_page);}
    }

    get_Ships(number_page: number) {
        this.request.get_StarShipments(number_page).subscribe((data) => {
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