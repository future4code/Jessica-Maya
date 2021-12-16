import { Follow } from "../entities/Follow";
import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase"

export class FollowIdDataBase extends BaseDataBase {
    public async createFollowId(follow: Follow) {
        console.log(follow)
        try{
        await BaseDataBase.connection("Cookenu_FollowId")
        .insert({
            user_seguidor: follow.getUserSeguidor(),
            user_seguindo: follow.getUserSeguindo(),
            role: follow.getRole()
        })
    }catch(error) {
        throw new Error(error.sqlMessage || error.message)
    }
    }

    public async getUserRecipes(): Promise <User[]> {
        try{
        const user = await BaseDataBase.connection("Cookenu_User")
        .select("id", "name")
        return user.map((user => User.toUserModel(user)))

        }catch(error) {
            throw new Error(error.sqlMessage || error.message)
        }

    }
}