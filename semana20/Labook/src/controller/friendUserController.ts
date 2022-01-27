import {Request, Response} from "express"
import { friendUserBusiness } from "../business/friendUserBusiness"

export const friendUserController = async (
    req: Request, 
    res: Response
    ) => {
        try {
            const { beAFriendOfTheUser } = req.body
            const token = req.headers.authorization as string

            const friendUser = await new friendUserBusiness()
            .insertFriendUser({ beAFriendOfTheUser }, token)

            res.status(200).send({
                message: `Você é amigo do ${beAFriendOfTheUser}`,
                friendUser
            })

        } catch (error: any) {
            res.status(400).send(error.message)
        }
}