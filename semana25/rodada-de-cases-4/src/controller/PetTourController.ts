import { Request, Response } from "express";
import { PetTourBusiness } from "../business/PetTourBusiness";
import { TourInputDTO } from "../model/Tour";

export class PetTourController {

   async createPetTourController(req: Request, res: Response) {
        try {
            const { date_walk, duration, latitude, longitude,start_time, end_time, pet_id} = req.body

            const input: TourInputDTO = {
                date_walk, 
                duration, 
                latitude, 
                longitude,
                start_time, 
                end_time, 
                pet_id
            }

            console.log(input)
            const tourMessage = await new PetTourBusiness().createPetTourBusiness(input)

            res.status(200).send({tourMessage})
            
        } catch (error) {
            if(error instanceof Error) {
                res.status(400).json({message: error.message})
            }else {
                res.status(400).json({message: "Unexpected Error"})
            }
        }
    }
}