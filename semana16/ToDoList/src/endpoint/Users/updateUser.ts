import { Request, Response } from "express"
import { connection } from "../../data/connection"

 export const updateUser = async(
     req: Request,
      res: Response
      ): Promise<any> =>{
  
        try {
    const id = req.params.id
    const {name, nickname} = req.body

   if (!id || !name || !nickname) {
     res.statusCode = 406
     throw new Error("Please check all fields!");
   }
   await connection("User").update({
    name,
    nickname
})
   
   res.status(200).send("User updated successfully!")
 } catch (error: any) {
    if(res.statusCode === 200){
        res.status(500).send("Ocorreu um erro inesperado!")
    }else{
        res.send(error.message)
    }
 }

}
