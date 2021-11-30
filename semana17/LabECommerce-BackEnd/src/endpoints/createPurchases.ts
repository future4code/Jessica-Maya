import { Request, Response } from "express"
import { connection } from "../data/connection"

export const createPurchases = async(
req: Request,
 res: Response
 ):Promise<any> =>{

    try {
        const {user_id, product_id, quantity}= req.body

        if(!user_id || !product_id){
            res.statusCode = 406
            throw new Error("'user_id' e 'product_id' são obrigatórios!");
        }

        const [product] = await connection("labecommerce_products")
        .where({id: product_id})


        const total = quantity * Number(product.price)


        await connection("labecommerce_purchases")
        .insert({
            user_id,
            product_id,
            quantity,
            total_price : total 
        })
        res.status(200).send("Compra registrada com sucesso!")


    } catch (error: any) {
        console.log(error)
        if(res.statusCode === 200){
            res.status(500).send("Ocorreu um erro inesperado!")
        }else{
            res.send(error.message)
        }
    }
}