import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase"

export class UserDataBase extends BaseDataBase {
    public async createUser(user: User) {
        try{
        await BaseDataBase.connection("Cookenu_User")
        .insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword(),
            name: user.getName(),
            role: user.getRole()
        })
        
    }catch(error) {
        throw new Error(error.sqlMessage || error.message)
    }
    }

    public async findUserEmail(email: string): Promise<User> {
        try {
            const user = await BaseDataBase.connection("Cookenu_User")
            .select(`*`)
            .where({email})

        return user[0] && User.toUserModel(user[0])
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getAllUsers(): Promise <User[]> {
        try{
        const user = await BaseDataBase.connection("Cookenu_User")
        .select("id", "name", "email, role")
       
        return user.map((user => User.toUserModel(user)))

        }catch(error) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    public async getUserId(id: string): Promise<User> {
        try {
            const user = await BaseDataBase.connection("Cookenu_User")
            .select("id", "name", "email, role")
            .where({id: id})

        return User.toUserModel(user[0])
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}