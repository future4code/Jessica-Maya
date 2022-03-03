import { Request, Response } from "express";
import { ProductBusiness } from "../Business/ProductBusiness";
import { ProductInput } from "../model/Product";

export class ProductController {
    async createProduct(req: Request, res: Response) {
        try {

            const { name, size, price } = req.body

            const input: ProductInput = {
                name,
                size,
                price
            }

            const productBusiness = new ProductBusiness()
            const productMessage = await productBusiness.createProduct(input)


            res.status(200).send({productMessage})
            
        } catch (error) {
            if(error instanceof Error) {
                res.status(400).json({message: error.message})
            }else {
                res.status(400).json({message: "Unexpected Error"})
            }
        }
    }

    async getProductByNameController(req: Request, res: Response) {
        try {
            const { name } = req.params
           
        const productByNameBusiness = new ProductBusiness()
        const productName  = await productByNameBusiness.getProductByNameBusiness(name)

       
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