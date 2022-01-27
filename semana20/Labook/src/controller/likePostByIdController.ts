import { Request, Response } from "express"
import { likePostByIdBusiness} from "../business/likePostByIdBusiness"

export const likePostByIdController = async (
    req: Request, 
    res: Response
    ) => {
        try {
            
            const { postId } = req.body
            const token = req.headers.authorization as string

            const likePost = await new likePostByIdBusiness().insertLikeById({postId}, token)

            res.status(200).send({
                message: `Você curtiu o post`,
                likePost
            })

        } catch (error: any) {
            res.status(400).send(error.message)
        }
}