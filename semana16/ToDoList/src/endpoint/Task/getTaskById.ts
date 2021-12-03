import { Request, Response } from "express"
import { connection } from "../../data/connection"

export const getTaskById =  async(
    req: Request,
     res: Response
     ) =>{
    try {
        let taskId = (req.params.taskId).toString()
        const result = await connection.raw(`
        SELECT TodoListTask.id as "TaskId", TodoListTask.title, TodoListTask.description, TodoListTask.status,
        TodoListTask.limit_date, TodoListUser.id as "CreaterUserId", TodoListUser.nickname as "creatorUserNickname"
        FROM TodoListTask
        JOIN TodoListUser
        ON TodoListUser.id = TodoListTask.creator_user_id
        WHERE TodoListTask.id = "${taskId}"
        `)
  
        if (!result) {
            res.statusCode = 404
            throw new Error(`Deu erro`)
        }
        res.status(200).send(result[0][0])
  
    } catch (error: any) {
        if(res.statusCode === 200){
            res.status(500).send("Ocorreu um erro inesperado!")
        }else{
            res.send(error.message)
        }
    }
  }