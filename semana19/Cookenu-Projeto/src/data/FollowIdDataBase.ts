import { Follow } from "../entities/Follow";
import { Recipe } from "../entities/Recipes";
import { BaseDataBase } from "./BaseDataBase"

export class FollowIdDataBase extends BaseDataBase {
    public async createFollowId(follow: Follow) {
        console.log(follow)
        try{
        await BaseDataBase.connection("Cookenu_FollowId")
        .insert({
            user_seguidor: follow.getUserSeguidor(),
            user_seguido: follow.getUserSeguido(),
        })
    }catch(error) {
        throw new Error(error.sqlMessage || error.message)
    }
    }

    public async getAllFollow(follow: Follow): Promise <Follow> {
        try{
        const followUsers  = await BaseDataBase.connection("Cookenu_FollowId")
        .select("*")
        .where({user_seguidor: follow.getUserSeguidor(), user_seguido:  follow.getUserSeguido()})
        return followUsers[0] && Follow.toFollowModel(followUsers[0])

        }catch(error) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    public async getFollowId(user_id: string, userSeguido: string) {
        try{
        const followId  = await BaseDataBase.connection("Cookenu_FollowId")
        .select("*")
        .where({user_seguido: user_id, user_seguidor: userSeguido})
        return followId[0]

        }catch(error) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    public async unfollowUser(unfollow: Follow) {
        try {

            await BaseDataBase.connection(`Cookenu_FollowId`).delete().where({
                user_seguidor: unfollow.getUserSeguidor(),
                user_seguido: unfollow.getUserSeguido()
            })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getFeed(user_id: string): Promise <Recipe[]> {
        try {
             const feed = await BaseDataBase.connection.raw(`
             SELECT 
              Cookenu_Recipe.id,
              Cookenu_Recipe.title,
              Cookenu_Recipe.description, 
              DATE_FORMAT (cratedAt,'%d/%m/%Y') as cratedAt,
              Cookenu_Recipe.image_url,
              Cookenu_Recipe.user_id,
              Cookenu_User.name
              FROM Cookenu_Recipe
              JOIN Cookenu_FollowId ON Cookenu_Recipe.user_id = Cookenu_FollowId.user_seguido
              JOIN Cookenu_User ON Cookenu_User.id = Cookenu_FollowId.user_seguido
              WHERE Cookenu_FollowId.user_seguido = user_id`)

            return feed[0]

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}