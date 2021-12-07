import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getUsersName = async(
   req: Request,
   res: Response
   ): Promise<void> =>{
   try {

      const name = req.query.name || "%"

      if(!name.length){
         res.statusCode = 404
         throw new Error("No users found")
      }
   
      const result = await connection("aula49_exercicio")
      .where("name", "LIKE", `%${name}%`)
      res.status(200).send(result)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

export const getUsersType = async(
   req: Request,
   res: Response
   ): Promise<void> =>{
   try {
   
      const type = req.query.type || "%"

      if(!type.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      const result = await connection("aula49_exercicio")
      .where("type", "LIKE", `%${type}%`)
      res.status(200).send(result)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

export const getUsersOrder = async(
   req: Request,
   res: Response
   ): Promise<void> =>{
   try {
   
      const query = req.query.query || "%"
      const sort = req.query.sort === "name" ? "name" : "email" || "type" ? "type" : "email" 
      const order = req.query.order === "DESC" ? "DESC" : "ASC"

      if(!query.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      const result = await connection("aula49_exercicio")
      .where("name", "LIKE", `%${query}%`)
      .orWhere("type", "LIKE", `%${query}%`)
      .orderBy(sort, order)
      res.status(200).send(result)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

export const getUsersPage = async(
   req: Request,
   res: Response
   ): Promise<void> =>{
   try {
   
      const query = req.query.query || "%"
      const sort = req.query.sort === "name" ? "name" : "email" || "type" ? "type" : "email"
      const order = req.query.order === "DESC" ? "DESC" : "ASC"
      const page = Number(req.query.page) || 1
      const size = Number(req.query.size) || 5
      const offset = size * (page - 1)

      if(!query.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      const result = await connection("aula49_exercicio")
      .where("name", "LIKE", `%${query}%`)
      .orWhere("type", "LIKE", `%${query}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)
      res.status(200).send(result)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

export const getUsersAll = async(
   req: Request,
   res: Response
   ): Promise<void> =>{
   try {
   
      const query = req.query.query || "%"
      const sort = req.query.sort === "name" ? "name" : "email" || "type" ? "type" : "email"
      const order = req.query.order === "DESC" ? "DESC" : "name" && "ASC"
      const page = Number(req.query.page) || 1
      const size = Number(req.query.size) || 5
      const offset = size * (page - 1)

      if(!query.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      const result = await connection("aula49_exercicio")
      .where("name", "LIKE", `%${query}%`)
      .orWhere("type", "LIKE", `%${query}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)
      res.status(200).send(result)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}



