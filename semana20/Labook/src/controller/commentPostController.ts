import { createPostComment } from "../business/commentPostBusiness"
import { Request, Response } from "express"

export const commentPostController = async (
    req: Request,
    res: Response
) => {
    try {

        const {userId, postId, comment} = req.body

        await new createPostComment().createComment({userId, postId, comment})

        res.status(200).send({
            message: "Comentário feito com sucesso",
        })
        
    } catch (error: any) {
        
    }

}
