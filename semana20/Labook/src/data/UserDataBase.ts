import { users } from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {

    insertUser = async (
        user: users
    )=> {
        try {
            await BaseDataBase.connection("labook_user")
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
        
    }

     selectUserByEmail = async (
        email: string
     ): Promise<users> => {
        
     try {
           
     const result = await BaseDataBase.connection("labook_user")        
     .select("*")        
     .where({ email })
     
     return result[0]
     
        } catch (error: any) {
           
     throw new Error(error.slqMessage || error.message)
        }
     }

    
}