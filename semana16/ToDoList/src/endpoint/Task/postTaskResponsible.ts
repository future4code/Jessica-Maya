import { Request, Response } from "express"
import { connection } from "../../data/connection"

export const postTaskResponsible = async(
    req: Request,
    res: Response
    )=>{

      try { 
    
        const { task_id, responsible_user_id, taskId} =  req.body
    
        if (!taskId || !task_id || !responsible_user_id) {
          res.statusCode = 401;
          throw new Error("Please check all fields!");
        }

        await connection("Task").insert({
            task_id,
            responsible_user_id,
            taskId
        })
        
        res.status(200).send("responsible_user_id Successfully done")
      } catch (error: any) {
        if(res.statusCode === 200){
            res.status(500).send("Ocorreu um erro inesperado!")
        }else{
            res.send(error.message)
        }
      }
    }