import { Request, Response } from "express"
import { connection } from "../data/connection"
import { Compras } from "../types"

export const getPurchasesUsers = async(
req: Request,
 res: Response
 ) =>{
    try {
        const user = req.params.user_id
        const [purchases]:Compras[] =  await connection("labecommerce_purchases")
        .where({"user_id": `${user}`})

        if(!purchases){
          res.statusCode = 400
            throw new Error("'user_id não existe.");
        }

        res.status(200).send(purchases);

    } catch (error: any) {
        res.status(400).send({message: error.message});
    }
}