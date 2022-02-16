import { TourDay, TourInsert } from "../model/Tour"
import { BaseDataBase } from "./BaseDataBase"

export class TourDataBase extends BaseDataBase {
    private static TABLE_NAME = "dogWalking_tour"

    async insertTourDay (tour: TourInsert){
       try {
           await this.getConnection()
           .insert(tour)
           .into(TourDataBase.TABLE_NAME)
       } catch (error) {

        if(error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error("An unexpected database error occurred!")
        }
      }
    }

    async getPetTour(date: string, size: number, offset: number) {
        try {
            const result: TourDay[] = await this.getConnection()
            .select(["dogWalking_pet.name_owner as Nome do Dono","dogWalking_pet.email as Email do pet",
            "dogWalking_pet.name_pet as Nome do pet","dogWalking_pet.email as Email do pet", "dogWalking_tour.date_walk as Data do Passeio", 
            "dogWalking_tour.duration as Duração", "dogWalking_tour.latitude as Latitude", "dogWalking_tour.longitude as Longitude",
            "dogWalking_tour.start_time as Início", "dogWalking_tour.end_time as Fim", "dogWalking_tour.price as Preço", "dogWalking_tour.status as Status"])
            .from(TourDataBase.TABLE_NAME)
            .innerJoin("dogWalking_pet", "dogWalking_tour.pet_id", "dogWalking_pet.id")
            .where("date_walk", "LIKE", `${date}`)
            .limit(size)
            .offset(offset)

            return result
        } catch (error) {
            if(error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("An unexpected database error occurred!")
            }
          }
    }
}