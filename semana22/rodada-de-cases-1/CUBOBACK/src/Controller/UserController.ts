import { Request, Response } from "express"
import { UserBusiness } from "../Business/UserBusiness"
import { UserInput } from "../Model/User"

export class UserController {

    async createUser(req: Request, res: Response) {
        try {
            const { firstName, lastName, participation } = req.body

            const input: UserInput = {
                firstName,
                lastName,
                participation
            }

            const userBusiness = new UserBusiness()
            const userMessage = await userBusiness.enteringUser(input)

            res.status(200).json({userMessage})

        } catch (error) {
            if(error instanceof Error) {
                res.status(400).json({message: error.message})
            }else {
                res.status(400).json({message: "Unexpected Error"})
            }
        }
    }


    async getAllUser(req: Request, res: Response) {
        try {
            const userBusiness = new UserBusiness()
            const allUsers = await userBusiness.allUser()

            res.status(200).send(allUsers)
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({message: error.message})
            } else {
                res.status(400).send({message: "Unexpected Error"})
            }
        }
    }
}