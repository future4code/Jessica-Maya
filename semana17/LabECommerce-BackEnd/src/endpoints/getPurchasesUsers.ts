import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getPurchasesUsers = async(
req: Request,
 res: Response
 ):Promise<void> =>{
    try {
        const user = req.params.user_id
        const [purchases] =  await connection("labecommerce_purchases")
        .where({"user_id": `${user}`})

        res.status(200).send(purchases);

    } catch (error: any) {
        res.status(400).send({
      message: error.message,
    });
    }
}