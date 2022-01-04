import { Request, Response } from "express"
import { UserBusinessLogin } from "../business/loginBusiness"
import { UserBusiness } from "../business/signupBusiness"
import { User } from "../model/User"


export const loginController = async (
    req: Request,
    res:Response,
    user: User
) => {
    try {
        
        const {email, password} = req.body
        const token = await new UserBusinessLogin().loginBusiness({ email: user.getEmail(), password: user.getPassword() })

        res.status(200).send({
            message: "Usuário logado!",
            token
         })

    } catch (error: any) {
        res.status(400).send(error.message)
    }
} 