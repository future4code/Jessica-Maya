import { posts } from "../model/Post";
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
            const result = await  BaseDataBase.connection("labook_post")
            .select("photo")
            .where({id: id})
    
            return result[0]
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}