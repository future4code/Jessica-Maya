import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase"

export class UserDataBase extends BaseDataBase {
    public async createUser(user: User) {
        try{
        await BaseDataBase.connection("Cookenu_User")
        .insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
        })
    }catch(error) {
        throw new Error(error.sqlMessage || error.message)
    }
    }

    public async findUserEmail(email: string): Promise<User> {
        try {
            const user = await BaseDataBase.connection("Cookenu_User")
            .select("*")
            .where({email: email})

        return User.toUserModel(user[0])
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getAllUsers(): Promise <User[]> {
        try{
        const user = await BaseDataBase.connection("Cookenu_User")
        .select("id", "name", "email")
        return user.map((user => User.toUserModel(user)))

        }catch(error) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    public async getUserId(id: string): Promise<User> {
        try {
            const user = await BaseDataBase.connection("Cookenu_User")
            .select("id", "name", "email")
            .where({id: id})

        return User.toUserModel(user[0])
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}