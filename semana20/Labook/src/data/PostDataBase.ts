import { Console } from "console";
import { posts, POST_TYPES } from "../model/Post";
import { BaseDataBase } from "./BaseDataBase";

export class PostDataBase extends BaseDataBase{

    insertPost = async (
        post: posts
    ) => {
        try {
            await BaseDataBase.connection("labook_post")
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                creationData: post.creationData,
                type: post.type,
                userId: post.userId
            })
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getPostById = async (id: string): Promise<posts> => {
        try {
            const result = await BaseDataBase.connection("labook_post")
            .select("*")
            .where({id: id})
            
            return result[0]
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getPostByType = async (id: string, type: string, order: string, sort: string) => {
        try {
            const result = await BaseDataBase.connection("labook_post")
             .innerJoin("labook_curtida", "labook_curtida.userId", "labook_curtida.userId")
             .innerJoin("labook_friend", "labook_friend.beAFriendOfTheUser", "labook_friend.beAFriendOfTheUser")
             .select("labook_post.id", "labook_post.photo", "labook_post.description",
             "labook_post.creationData", "labook_post.type","labook_curtida.userId")
             .where({type: type})
             .orderBy(sort, order)
            
            return result
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}