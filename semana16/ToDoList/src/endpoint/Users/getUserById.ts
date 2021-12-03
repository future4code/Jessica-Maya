import { Request, Response } from "express"
import { connection } from "../../data/connection"

export const getUserById = async(
    req: Request,
     res: Response
     ): Promise<void> =>{
        try {
  
      const {id} = req.params
      const [userId] = await connection("User")
      .where({"id": `${id}`})

      if(!userId){
        res.statusCode = 400
        throw new Error("User not found!")
      }

      res.status(200).send(userId)
    } catch (error: any) {
      if(res.statusCode === 200){
        res.status(500).send("Ocorreu um erro inesperado!")
    }else{
        res.send(error.message)
    }
    }
}