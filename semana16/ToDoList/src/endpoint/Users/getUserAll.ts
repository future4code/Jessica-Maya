import { Request, Response } from "express"
import { connection } from "../../data/connection"

 export const getUserAll = async(
     req: Request,
     res: Response
 ) => {
      try{
  
        const use = await connection("User")
        if(!use){
          res.statusCode = 401
          throw new Error("User not found!")
        }
        res.status(200).send(use)

      }catch(error: any){
        if(res.statusCode === 200){
          res.status(500).send("Ocorreu um erro inesperado!")
      }else{
          res.send(error.message)
      }
      }
  }
 