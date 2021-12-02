import { Request, Response } from "express"
import { join } from "path/posix"
import { connection } from "../data/connection"

export const getAllUsers = async(
req: Request,
 res: Response
 ): Promise<void> =>{

  //const result = await connection("labecommerce_users")
  // .select(["labecommerce_users.name","labecommerce_users.email"])
  // .innerJoin("labecommerce_purchases","labecommerce_purchases.user_id", "labecommerce_users.id")
  // .select(["labecommerce_purchases.user_id as users_id", "labecommerce_purchases.quantity", "labecommerce_purchases.total_price"])
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
      
      console.log(result)
        res.status(200).send(result);

    } catch (error: any) {
        res.status(400).send({
      message: error.message,
    });
    }
}