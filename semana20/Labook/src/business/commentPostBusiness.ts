import { CommentDataBase } from "../data/CommentDataBase"
import { IdGenerator } from "../services/IdGenerator"


export class createPostComment {

    createComment = async (comment: any) => {
        if(
            !comment.userId ||
            !comment.postId ||
            !comment.comment
        ){
            throw new Error("Preencha os campos 'userId' 'postId ' e 'comment' ")
        }

        const idGeneretor = new IdGenerator()
        const id = idGeneretor.generate()

        await new CommentDataBase().insertComment({
            id,
            userId: comment.userId,
            postId: comment.postId,
            comment: comment.comment
        })

    }
}