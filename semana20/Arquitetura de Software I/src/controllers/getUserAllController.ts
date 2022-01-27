import { Request, Response } from "express"
import { getAllUserBusiness } from "../bussines/getAllUserBusiness";

export const getUserAllController = async(
    req: Request,
    res: Response
) =>  {

try {
    const token = req.headers.authorization!;
            const users = await getAllUserBusiness(token);

            res.send(users).status(200);
    
} catch (error: any) {
    res.send({ message: error.message }).status(error.status)
}  

        

}