import { commentPost } from "../model/CommentPost";
import { BaseDataBase } from "./BaseDataBase";


export class CommentDataBase extends BaseDataBase {

    insertComment = async(comment: commentPost) => {
        try {
            
            await BaseDataBase.connection("labook_comentario")
            .insert({
                id: comment.id,
                userId: comment.userId,
                postId: comment.postId,
                comment: comment.comment
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}