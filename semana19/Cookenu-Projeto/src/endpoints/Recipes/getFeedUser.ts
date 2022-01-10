import { Request, Response } from "express"
import { FollowIdDataBase } from "../../data/FollowIdDataBase"
import { Authenticator } from "../../services/Authenticator"


export async function getFeedUser(req: Request, res: Response) {
    try{
        const token = req.headers.authorization

        if (!token) {
            res.status(422).send("Informe um token válido!")
        }

        const tokenData = new Authenticator().getTokenData(token) 

        if (!tokenData) {
            res.status(403).send("Não autorizado!")
        }
        
        const getFeed = await new FollowIdDataBase().getFeed(tokenData.id)
        
        if (!getFeed) {
            res.status(403).send("Nenhuma receita")
        }
        res.status(200).send(getFeed[0])
    }catch (error){
        res.send(error.sqlMessage || error.message)
    }
}