import formatDate from "../services/dataFormat";

export class TourDay {
    
    constructor(
       private id: string,
       private date_walk: Date,
       private duration: string,
       private latitude: string,
       private longitude: string,
       private start_time: string,
       private end_time: string,
       private status: string,
       private price: number,
       private pet_id: string[],
    ) {
        
    }

    static tourModel(tour: TourDay) {
        return new TourDay(tour.id, tour.date_walk, tour.duration, tour.latitude, tour.longitude,
            tour.start_time, tour.end_time, tour.status, tour.price, tour.pet_id)
    }
}

export enum Walking_Duration {
    "THIRTYMINUTES" = 30,
    "SIXTYMINUTES" = 60
}

export interface TourInputDTO {
       date_walk: string,
       duration: Walking_Duration,
       latitude: string,
       longitude: string,
       start_time: string,
       end_time: string,
       pet_id: string[],
}

export interface TourInsert extends TourInputDTO {
    id: string,
    status: string,
    price: number
}