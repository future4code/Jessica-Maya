import { Request, Response } from "express";
import { connection }from "../data/connection"
import {Authenticator} from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerated } from "../services/IdGenerated";
import { user } from "../types"

export default async function createUsers(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const {email, password, role} = req.body

        if (!email || !password || !role) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'email', 'role' e 'password' ")
          }

        if(!email || email.indexOf("@") === -1 || email.indexOf(".com") === -1) {
            throw new Error("Invalid email")
        }

        const [user] = await connection('Users')
         .where({ email })

         if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

        const id: string = new IdGenerated().generatedId()

        const cypherPassword: string = new HashManager().createHash(password)

        const newUser: user = {
            id,
            email,
            password: cypherPassword,
            role
        }

        await connection("Users")
         .insert(newUser)

        const token= new Authenticator().generateToken({ id }) 
      
          res.status(200).send({ newUser, token })
         
    } catch (err: any) {
        res.status(400).send({
            message: err.message
          });
    }
}


