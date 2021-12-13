import { Request, Response } from "express";
import { getUserByEmail } from "../data/connection";
import { generateToken } from "../services/generateToken";

export default async function login(
    req: Request,
    res: Response
): Promise<void> {

    try {
        const {email, password} = req.body

        if(!email || email.indexOf("@") === -1 || email.indexOf(".com") === -1) {
            throw new Error("Invalid email")
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
          }

        const user = await getUserByEmail(userData.email)

        if (user.password !== userData.password) {
            throw new Error("Invalid password");
          }

          const token = generateToken({
            id: user.id,
          });
      
          res.status(200).send({
            token,
          });

    } catch (err: any) {
        res.status(400).send({
            message: err.message,
          });
    }
}

