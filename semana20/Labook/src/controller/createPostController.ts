import { Request, Response } from "express";
import { createPostBusiness } from "../business/createPostBusiness";


export const createPostController = async (
    req: Request,
    res: Response
) => {
    try {
        const {photo, description, creationData, type, userId} = req.body

        const token = await new createPostBusiness().createPost({photo, description, creationData, type, userId})

        res.status(200).send({
            message: "Post criado com sucesso"
        })
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}