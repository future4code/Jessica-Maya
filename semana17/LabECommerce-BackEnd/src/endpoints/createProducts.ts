import { Request, Response } from "express"
import { connection } from "../data/connection"
import {Products} from "../types"

export const createProducts = async(
req: Request,
 res:Response)
 : Promise<any> =>{

    try {
        const {name, price, image_url} = req.body

        if(!name || !price || !image_url){
            res.statusCode = 406
            throw new Error("'name', 'price' e 'image_url' são obrigatórios!")
        }

        const product: Products = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }
        await connection("labecommerce_products").insert(product)

        res.status(200).send("Produto Cadastrado!")

    } catch (error: any) {
        if(res.statusCode === 200){
            res.status(500).send("Ocorreu um erro inesperado!")
        }else{
            res.send(error.message)
        }
    }
}