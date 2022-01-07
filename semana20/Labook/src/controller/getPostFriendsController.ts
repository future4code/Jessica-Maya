import { Request, Response } from "express"
import { getPostFriendsBusiness } from "../business/getPostsFriendsBusiness"


export const getPostFriendsController = async (
            req: Request,
            res: Response
        ) => {
            try {
                
                const token = req.headers.authorization as string
                const sort = req.query.sort === "beAFriendOfTheUser" ? "beAFriendOfTheUser" : "userId"
                const order = req.query.order === "DESC" ? "DESC" : "ASC"
                const page = Number(req.query.page) || 1
                const size = Number(req.query.size) || 5
                const offset = size * (page - 1)

                
                const postFriend = await new getPostFriendsBusiness().getPostFriends(token, order,sort, size, offset)

                res.status(200).send(postFriend)
                
            } catch (error: any) {
            
             res.status(400).send(error.sqlMessage || error.message)
 
            }
        }