import { Request, Response } from "express"
import { connection } from "../data/connection"
import {User} from "../types"

export const createUsers = async(
req: Request,
 res: Response
 ): Promise<any> =>{


    try {
    
        const {name, email, password}= req.body

        const [user] = await connection("labecommerce_users")
        .where({email: email})

        if(user){
            res.statusCode = 409
            throw new Error("Email já cadastrado!");
            
        }

        if(password.length < 6){
            res.statusCode = 422
            throw new Error("A senha deve conter no minimo seis caracteres!");
            
        }

        if(!name || !email || !password){
            res.statusCode = 406
            throw new Error("'name', 'email' e 'password' são obrigatórios!");
        }


        if(!email.includes("@") || !email.includes(".com")){
            res.statusCode = 406;
            throw new Error(`O campo do e-mail deve conter um "@" e um ".com"`);
          }

          const users: User = {
            id: Date.now().toString(),
            name,
            email,
            password
          }
          await connection("labecommerce_users").insert(users)

          res.status(200).send("Usuario Cadastrado!")

    } catch (error: any) {
        if(res.statusCode === 200){
            res.status(500).send("Ocorreu um erro inesperado!")
        }else{
            res.send(error.message)
        }
    }
}