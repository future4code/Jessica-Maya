import { Request, Response } from "express"
import { connection } from "../../data/connection"

 export const postUser = async(
     req: Request,
    res: Response
      ): Promise<any> =>{
   
        try { 
      const{id, name, nickname, email} = req.body
  
      const [user] = await connection("User")
      .where({email: email})

      if(user){
          res.statusCode = 409
          throw new Error("Email já cadastrado!");
      }

      if(!name || !nickname || !email){
          res.statusCode = 406
          throw new Error("'name', 'nickname' e 'email' são obrigatórios!");
      }

      if(!email.includes("@") || !email.includes(".com")){
          res.statusCode = 406;
          throw new Error(`O campo do e-mail deve conter um "@" e um ".com"`);
        }

        await connection("User")
        .insert({
            id: Date.now().toString(),
            name,
            nickname,
            email
        })
  
       res.status(200).send("User Create Success!")
    } catch (error:any) {
      if(res.statusCode === 200){
        res.status(500).send("Ocorreu um erro inesperado!")
    }else{
        res.send(error.message)
    }
    }
  }