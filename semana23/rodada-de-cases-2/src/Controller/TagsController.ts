import { Request, Response } from "express"
import { TagsBusiness } from "../Business/TagsBusiness"
import { TagsInput } from "../model/Tags"


export class TagsController {
    async createTag(req: Request, res: Response) {
        try {
            const { name } = req.body

            const input: TagsInput = {
                name
            }

            const tagsBusiness = new TagsBusiness()
            const tagMessage = await tagsBusiness.createTags(input)

            res.status(200).send({tagMessage})
            
        } catch (error) {
            if(error instanceof Error) {
                res.status(400).json({message: error.message})
            }else {
                res.status(400).json({message: "Unexpected Error"})
            }
        }
    }

   
     async getTagByNameController(req: Request, res: Response) {
        try {
            const { name } = req.params
           
        const productByNameBusiness = new TagsBusiness()
        const productName  = await productByNameBusiness.getTagByNameBusiness(name)

       
        res.status(200).send({productName})

        } catch (error) {
            if(error instanceof Error) {
                res.status(400).json({message: error.message})
            }else {
                res.status(400).json({message: "Unexpected Error"})
            }
        }
    }

}