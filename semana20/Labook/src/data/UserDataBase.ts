import { User } from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {

    insertUser = async (
        user: User
    )=> {
        try {
            await BaseDataBase.connection("labook_user")
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            })
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
        
    }

     selectUserByEmail = async (
        email: string
     ): Promise<User> => {
        
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