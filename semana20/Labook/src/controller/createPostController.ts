import { Request, Response } from "express";
import { createPostBusiness } from "../business/createPostBusiness";


export const createPostController = async (
    req: Request,
    res: Response
) => {
    try {
        const {photo, description, creationData, type, userId} = req.body
        const token = req.headers.authorization as string

        const post = await new createPostBusiness().createPost({photo, description, creationData, type, userId}, token)

        res.status(200).send({
            message: "Post criado com sucesso",
            post
        })
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}