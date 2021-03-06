import {Request, Response} from "express"
import { UserDataBase } from "../../data/UserDataBase"

export async function perfilUserId(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const id = req.params.id

        if(!id) {
            res.status(422).send("Precisa passar o id do usuario no params.")
        }

        if(!token) {
            res.status(422).send("Esse endpoint precisa de uma autorização a ser passada nos headers")
        }

        const userDataBase = new UserDataBase()
        const users = await userDataBase.getUserId(id)

        res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error.message)
    }

}