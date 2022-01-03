import { deleteUserIdBusiness } from "../bussines/deleteUserIdBusiness";
import { Request, Response } from "express" 
import { deleteUser } from "../data/deleteUser"



export const deleteUserIdController = async(
    req: Request, 
    res: Response
) =>  {
    try {
        const input = {
            id: req.params.id ,
            token: req.headers.authorization!
        } 

       await deleteUserIdBusiness(input) ;

        res.status(200).send({ message: "Usuário apagado com sucesso" });

    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }


}
