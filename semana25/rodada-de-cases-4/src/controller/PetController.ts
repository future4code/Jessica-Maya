import { Request, Response } from "express";
import { PetBusiness } from "../business/PetBusiness";
import { PetInputDTO } from "../model/Pets";

export class PetController {

   async createPetController(req: Request, res: Response) {
        try {
            const {name_owner , email, name_pet} = req.body

            const input: PetInputDTO = {
                name_owner,
                email,
                name_pet
            }
            const petMessage = await new PetBusiness().createPetBusiness(input)

            res.status(200).send({petMessage})
            
        } catch (error) {
            if(error instanceof Error) {
                res.status(400).json({message: error.message})
            }else {
                res.status(400).json({message: "Unexpected Error"})
            }
        }
    }
}