import { createPostComment } from "../business/commentPostBusiness"
import { Request, Response } from "express"

export const commentPostController = async (
    req: Request,
    res: Response
) => {
    try {

        const {userId, postId, comment} = req.body
        const token = req.headers.authorization as string

        await new createPostComment().createComment({userId, postId, comment}, token)

        res.status(200).send({
            message: "Comentário feito com sucesso",
        })
        
    } catch (error: any) {
        
    }

}
