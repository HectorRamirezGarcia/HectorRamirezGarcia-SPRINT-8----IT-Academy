export interface Shipments {
    name: string,
    img: string,
    desc: string,
    model: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    max_atmosphering_speed: string,
    crew: string,
    passengers: string,
    cargo_capacity: string,
    consumables: string,
    hyperdrive_rating: string,
    MGLT: string,
    starship_class: string,
    pilots: [],
    films: [],
    created: string,
    edited: string,
    url: string,
}

export interface Request_Shipments {
    count: number,
    next: string,
    previous: any,
    results: Shipments[]
}