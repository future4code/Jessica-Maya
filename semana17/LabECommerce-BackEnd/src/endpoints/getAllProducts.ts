import { Request, Response } from "express"
import { connection } from "../data/connection"
import { Products } from "../types"

export const getAllProducts = async(
req: Request,
 res: Response
 ) =>{

    try {
      const search = req.query.search || "%"
      const sort = req.query.sort === "name" ? "name" : "id"
      const order = req.query.order === "DESC" ? "DESC" : "ASC"

      const products: Products[] = await connection("labecommerce_products")
      .where("name", "LIKE", `%${search}%`)
      .orderBy(sort, order)
        res.status(200).send(products);

    } catch (error: any) {
      console.log(error)
        res.status(400).send({
      message: error.message,
    });
    }
}