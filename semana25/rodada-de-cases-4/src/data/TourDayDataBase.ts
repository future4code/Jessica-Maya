import { TourInsert } from "../model/Tour"
import { BaseDataBase } from "./BaseDataBase"

export class TourDayDataBase extends BaseDataBase {
    private static TABLE_NAME = "dogWalking_tourDay"

    async insertTour (tour: TourInsert){
       try {
           await this.getConnection()
           .insert(tour)
           .into(TourDayDataBase.TABLE_NAME)
       } catch (error) {

        if(error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error("An unexpected database error occurred!")
        }
      }
    }
}