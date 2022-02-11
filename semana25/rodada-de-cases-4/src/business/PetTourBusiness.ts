import { TourDataBase } from "../data/TourDataBase";
import { MissingFieldsToComplet } from "../error/MissingFieldsToComplet";
import { TourInputDTO, TourInsert, Walking_Duration } from "../model/Tour";
import IdGenerator from "../services/IdGenerator";

export class PetTourBusiness {
    createPetTourBusiness = async(input: TourInputDTO) => {
        if(!input.date_walk || !input.duration || !input.latitude || !input.longitude || 
         !input.start_time || !input.end_time || !input.pet_id) {
             throw new MissingFieldsToComplet()
         }

         const [hour_start , minutes_start] = input.start_time.split(":")
         const [hour_end , minutes_end] = input.end_time.split(":")
         
         const start = Number(minutes_start) + (Number(hour_start) * 60 )
         const end =  Number(minutes_end) + (Number(hour_end) * 60)
        
         if( end - start !== 60 && end - start   !== 30) {
             throw new Error("Our tour schedules are 30 or 60 minutes long")
         }

         let  preco = 0

         if(end - start === 60 ) {
             preco = 35 + (input.pet_id.length -1) * 20
         }

         if(end - start === 30 ) {
            preco = 25 + (input.pet_id.length -1) * 15
        }

        let status = ""
        let date = new Date().toISOString()
    if(new Date(input.date_walk).toISOString() > date) {
        status = "Esperando o passeio chegar"
    } else if(new Date(input.date_walk).toISOString() === new Date().toISOString()) {
        status = "Hoje é dia de passeio"
    }else if(new Date(input.date_walk).toISOString() < date) {
        status = "Seu passeio já passou, vamos marcar outro?"
    }

         const tour  : TourInsert = {
            id: IdGenerator.generate(),
            price: preco, 
            status: status,
            ...input
        }
        console.log(tour)
        const tourDataBase = new TourDataBase()

         await tourDataBase.insertTourDay(tour)


        return "Walk with your pet successfully registered on the date:  "+ tour.date_walk
        
    }

    getAllDateTourBusiness = async(date: string, size: number, offset: number) => {
        
        const petTourDataBase = new TourDataBase()
        const result = await petTourDataBase.getPetTour(date, size, offset)

        return result
    }
}