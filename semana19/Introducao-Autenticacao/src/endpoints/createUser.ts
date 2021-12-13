import { Request, Response } from "express";
import { createUser }from "../data/connection"
import { generateToken } from "../services/generateToken";
import { generateId } from "../services/generateId";

export default async function createUsers(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const {email, password} = req.body

        if(!email || email.indexOf("@") === -1 || email.indexOf(".com") === -1) {
            throw new Error("Invalid email")
        }

        if(!password || password.length < 6) {
            throw new Error("Invalid password");
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
          };

        const id = generateId()

        await createUser(id, userData.email, userData.password)

        const token= generateToken({ id }) 
      
          res.status(200).send({ token })
         
    } catch (err: any) {
        res.status(400).send({
            message: err.message
          });
    }
}


