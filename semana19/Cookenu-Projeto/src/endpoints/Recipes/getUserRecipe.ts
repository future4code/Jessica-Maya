import { Request, Response } from "express"
import { BaseDataBase } from "../../data/BaseDataBase"

export async function getUserRecipe(req: Request, res: Response) {
    try{
        const token = req.headers.authorization

        if(!token) {
            res.status(422).send("Esse endpoint precisa de uma autorização a ser passada nos headers")
        }

    }catch (error){
    res.status(400).send(error.message)
    }
}