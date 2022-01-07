import { Request, Response } from "express"
import { dontFriendUserBusiness } from "../business/dontFriendUserBusiness"

export const dontFriendUserController = async (
    req: Request, 
    res: Response
    ) => {
        try {
            
            const { userFriend, beAFriendOfTheUser } = req.body
            const token = req.headers.authorization as string

            const dontFriend = await new dontFriendUserBusiness().dontFriend({userFriend, beAFriendOfTheUser}, token)

            res.status(200).send({
                message: `Voce deixou de ser amigo do usuário ${beAFriendOfTheUser}`,
                dontFriend
            })

        } catch (error: any) {
            res.status(400).send(error.message)
        }
}