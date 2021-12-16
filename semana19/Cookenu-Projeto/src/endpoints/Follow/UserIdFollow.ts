import { Request, Response } from "express"
import { FollowIdDataBase } from "../../data/FollowIdDataBase"
import { Follow } from "../../entities/Follow"

export async function userIdFollow(req: Request, res: Response) {
    try{
        const {user_seguidor, user_seguindo, role} = req.body

        if(!user_seguidor || !user_seguindo || !role) {
            res.status(422).send("Insira corretamente as informações de 'user_seguidor', 'user_seguindo' e 'role'")
        }

        const followUserDataBase = new FollowIdDataBase()
        const newFollow = new Follow( user_seguidor, user_seguindo, role)

        if(followUserDataBase === followUserDataBase) {
            res.status(400).send("Você já está seguindo o usuário.")
        }

        await followUserDataBase.createFollowId(newFollow)

        res.status(200).send("Você está seguindo o usuário.")
    }catch (error){
    res.status(400).send(error.message)
    }
}