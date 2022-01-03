import { Request, Response } from "express"
import { loginBussines } from "../bussines/loginBussines"

export const loginController = async (
    req: Request,
    res:Response
) => {
    try {
        
        const { email , password } = req.body
        const token = await loginBussines({ email, password })

        res.send({
            message: "Usuário logado!",
            token
         })

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}