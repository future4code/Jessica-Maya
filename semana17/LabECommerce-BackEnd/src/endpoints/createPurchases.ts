import { Request, Response } from "express"
import { connection } from "../data/connection"
import { Compras, Products, User } from "../types"

export const createPurchases = async(
req: Request,
 res: Response
 ) =>{

    try {
        const {user_id, product_id, quantity}= req.body

        if(!user_id || !product_id || !quantity){
            res.statusCode = 406
            throw new Error("'user_id', 'product_id' e 'quantity são obrigatórios!");
        }

        const [user]: User[] = await connection("labecommerce_users")
        .where({id: user_id})

        if(!user){
            throw new Error("Usuario não encontrado (user_id");  
        }

        const [product]: Products[] = await connection("labecommerce_products")
        .where({id: product_id})

        if(!product){
            throw new Error("Produto não encontrado (product_id");  
        }

        const total_price = quantity * Number(product.price)

        const compra: Compras = {
            id: Date.now().toString(),
            user_id,
            product_id,
            quantity,
            total_price
        }

        await connection("labecommerce_purchases").insert(compra)
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