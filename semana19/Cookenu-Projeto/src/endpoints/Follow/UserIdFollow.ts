import { Request, Response } from "express"
import { FollowIdDataBase } from "../../data/FollowIdDataBase"
import { UserDataBase } from "../../data/UserDataBase"
import { Follow } from "../../entities/Follow"
import { Authenticator } from "../../services/Authenticator"

export async function userIdFollow(req: Request, res: Response) {
    try{

        const token = req.headers.authorization

        if (!token) {
            res.status(422).send("Informe um token válido!")
        }

        const {user_seguido} = req.body

        const user = await new UserDataBase().getUserId(user_seguido)

        if(!user_seguido || !user) {
            res.status(422).send("Insira corretamente as informações do 'user_seguido' para seguir")
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData) {
            res.status(403).send("Usuário não autorizado!")
        }

        const followUserDataBase = new Follow(tokenData.id, user_seguido)
        const seguindo = await new FollowIdDataBase().getAllFollow(followUserDataBase)

        if(seguindo) {
            res.status(403).send("Você já está seguindo o usuário.")
        }

        if (tokenData.id === user_seguido) {
            res.status(403).send("Você não pode seguir você mesmo!")
        }


        await new FollowIdDataBase().createFollowId(followUserDataBase)

        res.status(200).send("Você está seguindo o usuário.")
    }catch (error){
    res.status(400).send(error.message)
    }
}