import { Request, Response } from "express";
import { getUserById } from "../data/connection";
import { getByUser } from "../services/Authenticator"


export default async function getUserId(
    req: Request,
    res: Response
): Promise<void> {
    try {
        
        const token = req.headers.authorization as string;

        const authenticationData = getByUser(token);
    
        if (authenticationData.role !== "normal") {
          throw new Error("Only a normal user can access this funcionality");
        }
    
        const user = await getUserById(authenticationData.id);
    
        res.status(200).send({
          id: user.id,
          email: user.email,
          role: authenticationData.role,
        });
    } catch (err: any) {
        res.status(400).send({
            message: err.message
          });
    }
}

