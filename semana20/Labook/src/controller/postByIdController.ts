import { Request, Response } from "express"
import { postByIdBusiness } from "../business/postByIdBusiness"

export const postByIdController = async (
            req: Request,
            res: Response
        ) => {
            try {

                const {id} = req.params
                const token = req.headers.authorization as string
                const post = await new postByIdBusiness().postById(id, token)

                res.status(200).send(post)

            } catch (error: any) {
                console.log(error)
             res.status(400).send("Tente novamente, ocorreu algum erro inexperado!")
 
            }
        }
