import { BaseDataBase } from "./BaseDataBase";
import { dontlike, like } from "../model/LikePost"

export class LikeByIdPostDataBase extends BaseDataBase {

    insertLikePost =  async(like: like) => {
        try {
                await BaseDataBase.connection("labook_curtida")
                .insert({
                    userId: like.userId,
                    postId: like.postId
                })
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    dontLikePost = async(deslike: dontlike) => {
        try {
            await BaseDataBase.connection("labook_curtida")
            .delete()
            .where({
                userId: deslike.userId,
                postId: deslike.postId
            })
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}