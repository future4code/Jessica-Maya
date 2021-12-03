import { Request, Response } from "express"
import { connection } from "../../data/connection"

export const getTaskCreatorById = async(
    req: Request,
    res:Response
    ): Promise<any> =>{

      try {

          const creatorUserId = req.query.creatorUserId
        const result = connection("Task")
        .where("creatorUserId", "LIKE", `%${creatorUserId}%`)


        if(!result){
          res.statusCode = 404
        throw new Error("Please check all fields!")
        }
  
        res.status(200).send(result)
      } catch (error: any) {
        if(res.statusCode === 200){
            res.status(500).send("Ocorreu um erro inesperado!")
        }else{
            res.send(error.message)
        }
      }
  }

