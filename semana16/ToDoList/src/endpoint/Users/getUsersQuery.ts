import { Request, Response } from "express"
import { connection } from "../../data/connection"

export const getUsersQuery = async(
    req: Request,
     res: Response
     ): Promise <void> =>{
  
        try {

      const nickname = req.query.nickname 

      const search = await connection("User")
      .select("User.id", "User.nickname")
      .where("nickname", "LIKE", `%${nickname}%`)

        if(!nickname){
          res.statusCode = 404
        throw new Error("Please check all fields!")
        }
  
        res.status(200).send(search)
    } catch (error: any) {
      if(res.statusCode === 200){
        res.status(500).send("Ocorreu um erro inesperado!")
    }else{
        res.send(error.message)
    }
    }
  }