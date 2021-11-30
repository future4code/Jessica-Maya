import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsers = async(
req: Request,
 res: Response
 ): Promise<void> =>{

    try {

      const [users] = await connection("labecommerce_users") 
        

      const [purchases] =  await connection("labecommerce_purchases")
        .where({"user_id": `${users}`})



        res.status(200).send(purchases);

    } catch (error: any) {
        res.status(400).send({
      message: error.message,
    });
    }
}