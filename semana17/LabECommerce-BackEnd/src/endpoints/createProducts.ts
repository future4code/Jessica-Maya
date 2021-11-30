import { Request, Response } from "express"
import { connection } from "../data/connection"

export const createProducts = async(
req: Request,
 res:Response)
 : Promise<any> =>{

    try {
        const {name, price, image_url} = req.body

        if(!name || !price){
            res.statusCode = 406
            throw new Error("'name' e 'price' são obrigatórios!");
        }
        await connection("labecommerce_products")
        .insert({
            id: Date.now().toString(),
            name,
            price,
            image_url
        })
        res.status(200).send("Produto Cadastrado!")

    } catch (error: any) {
        if(res.statusCode === 200){
            res.status(500).send("Ocorreu um erro inesperado!")
        }else{
            res.send(error.message)
        }
    }
}