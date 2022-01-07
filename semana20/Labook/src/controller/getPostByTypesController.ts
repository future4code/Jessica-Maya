import { Request, Response } from "express"
import{ getPostTypesBusiness } from "../business/getPostByTypesBusiness"

export const getPostByTypesController = async (
            req: Request,
            res: Response
        ) => {
            try {
                
                const token = req.headers.authorization as string
                const type = req.params.type
                const sort = req.query.sort === "type" ? "type" : "id"
                const order = req.query.order === "DESC" ? "DESC" : "ASC"
                const postType = await new getPostTypesBusiness().getPostTypes(token,type, sort, order)
        
                res.status(200).send(postType)
                
            } catch (error: any) {
            
             res.status(400).send(error.sqlMessage || error.message)
 
            }
        }