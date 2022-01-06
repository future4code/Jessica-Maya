import { Request, Response } from "express"
import { dontLikePostByIdBusiness } from "../business/dontLikePostByIdBusiness"

export const dontLikePostByIdController = async (
    req: Request, 
    res: Response
    ) => {
        try {
            const { userId, postId } = req.body
            const token = req.headers.authorization

            if (!token) {
                res.status(422).send("Informe um token válido!")
            }

            const dontLikePost = await new dontLikePostByIdBusiness().dontLikeById({userId, postId})

            res.status(200).send({
                message: `Você descurtiu o post`,
                dontLikePost
            })

        } catch (error: any) {
            res.status(400).send(error.message)
        }
}