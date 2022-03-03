import { Request, Response } from "express";
import { ProductTagIdBusiness } from "../Business/ProductTagIdBusiness";
import { ProductTagInput } from "../model/ProductTagId";


export class ProductTagIdController {
    async createProductTagId(req: Request, res: Response) {
        try {
            
            const { id_product, id_tags } = req.body

            const input: ProductTagInput={
                id_product,
                id_tags
            }


            const productTagIdBusiness = new ProductTagIdBusiness()
            const productTagIdMessage = await productTagIdBusiness.createProductTagId(input) 

            res.status(200).send({productTagIdMessage})
            
        } catch (error) {
            if(error instanceof Error) {
                res.status(400).json({message: error.message})
            }else {
                res.status(400).json({message: "Unexpected Error"})
            }
        }
    }

    async getProduct_TagsByIdProductController(req: Request, res: Response) {
        try {
            const { id_product } = req.params
            
           
        const productTagsByIdProductBusiness = new ProductTagIdBusiness()
        const productId  = await productTagsByIdProductBusiness.getProduct_TagsByIdProductBusiness(id_product)

        res.status(200).send({productId})

        } catch (error) {
            if(error instanceof Error) {
                res.status(400).json({message: error.message})
            }else {
                res.status(400).json({message: "Unexpected Error"})
            }
        }
    }

    async getProduct_TagsByIdTagController(req: Request, res: Response) {
        try {
            const id_tag = req.query.id_tag
            
           
        const productTagsByIdTagBusiness = new ProductTagIdBusiness()
        const tagId  = await productTagsByIdTagBusiness.getProduct_TagsByIdTagBusiness(id_tag as string)
           
        res.status(200).send({tagId})

        } catch (error) {
            if(error instanceof Error) {
                res.status(400).json({message: error.message})
            }else {
                res.status(400).json({message: "Unexpected Error"})
            }
        }
    }


}