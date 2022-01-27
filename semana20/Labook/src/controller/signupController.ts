import { Request, Response } from "express"
import { UserBusiness } from "../business/signupBusiness"

export const signupController = async (
    req: Request,
    res: Response
) => {
    try {
        
        const {name, email, password} = req.body

        const token = await new UserBusiness().signupBusiness({name, email, password})

        res.status(200).send({
            message: `Usuário ${name} criado com sucesso!`,
            token
        })

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}