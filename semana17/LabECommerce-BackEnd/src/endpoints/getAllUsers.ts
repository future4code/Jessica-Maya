import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsers = async(
req: Request,
 res: Response
 ) =>{


    try {

      const result = await connection("labecommerce_purchases")
      .innerJoin("labecommerce_users","labecommerce_users.id", "labecommerce_purchases.user_id")
      .innerJoin("labecommerce_products","labecommerce_products.id", "labecommerce_purchases.product_id")
      .select(["labecommerce_purchases.user_id","labecommerce_users.name", "labecommerce_users.email",
      "labecommerce_purchases.product_id","labecommerce_products.name as labecommerce_purchases.product_id",
      "labecommerce_purchases.quantity", "labecommerce_purchases.total_price", 
      "labecommerce_products.image_url"])

      if(!result){
        res.statusCode = 400
          throw new Error(" não existe compras.");
      }
      
        res.status(200).send(result);

    } catch (error: any) {
        res.status(400).send({
      message: error.message,
    });
    }
}