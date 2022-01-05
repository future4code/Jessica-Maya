import { Request, Response } from "express"
import { UserBusinessLogin } from "../business/loginBusiness"

export const loginController = async (
    req: Request,
    res:Response
) => {
    try {
        
        const {email, password } = req.body

        const token = await new UserBusinessLogin().loginBusiness({email, password})

        res.status(200).send({
            message: "Usuário logado!",
            token
         })

    } catch (error: any) {
        res.status(400).send(error.message)
    }
} 