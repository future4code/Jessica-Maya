import { Request, Response } from "express"
import { FollowIdDataBase } from "../../data/FollowIdDataBase"
import { UserDataBase } from "../../data/UserDataBase"
import { Follow } from "../../entities/Follow"
import { Authenticator } from "../../services/Authenticator"

export async function userUnFollow(req: Request, res: Response) {
    try{
        const token = req.headers.authorization

        if(!token) {
            res.status(422).send("Informe um token válido")
        }

        const {user_seguido} = req.body

        const user = await new UserDataBase().getUserId(user_seguido)

        if(!user_seguido || !user) {
            res.status(422).send("Informe um 'user_seguido' válido para deixar de seguir")
        }

        const tokenData = new Authenticator().getTokenData(token)

        if(!tokenData) {
            res.status(403).send("Usuario não Autorizado")
        }

        const followId = await new FollowIdDataBase().getFollowId(tokenData.id, user_seguido)

        if(!followId) {
            res.status(403).send("Você não segue o usuário")
        }

        const unFollow = new Follow(tokenData.id, user_seguido)

        await new FollowIdDataBase().unfollowUser(unFollow)
        res.status(201).send({ message: "Unfollowed successfully!"})

    }catch (error){
    res.status(400).send(error.message)
    }
}