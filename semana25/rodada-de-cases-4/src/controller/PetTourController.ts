import { Request, Response } from "express";
import { PetTourBusiness } from "../business/PetTourBusiness";
import { TourInputDTO } from "../model/Tour";

export class PetTourController {

   async createPetTourController(req: Request, res: Response) {
        try {
            let { date_walk, duration, latitude, longitude,start_time, end_time, pet_id} = req.body
    
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


   async getAllDateTourController(req: Request, res: Response) {
        try {
            const  date  = req.query.date || "%" 
            const page = Number(req.query.page) || 1
            const size = Number(req.query.size) || 5
            const offset = size * (page - 1)
            const tourBusiness = new PetTourBusiness()
            const tour = await tourBusiness.getAllDateTourBusiness(date as string, size, offset)
            res.status(200).send(tour)

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({message: error.message})
            } else {
                res.status(400).send({message: "Unexpected Error"})
            }
        }
    }

}