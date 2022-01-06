import { Request, Response } from "express"
import { FriendsUserDataBase } from "../data/friendsUserDataBase"

export const dontFriendUserController = async (
    req: Request, 
    res: Response
    ) => {
        try {
            
            const { userFriend, beAFriendOfTheUser } = req.body
            const token = req.headers.authorization

            if (!token) {
                res.status(422).send("Informe um token válido!")
            }

            const dontFriend = await new FriendsUserDataBase().dontFriendsUser({userFriend, beAFriendOfTheUser})

            res.status(200).send({
                message: `Voce deixou de ser amigo do usuário ${beAFriendOfTheUser}`,
                dontFriend
            })

        } catch (error: any) {
            res.status(400).send(error.message)
        }
}