import { CommentDataBase } from "../data/CommentDataBase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"


export class createPostComment {

    createComment = async (comment: any, token: string) => {
        
        if(
            !comment.userId ||
            !comment.postId ||
            !comment.comment
        ){
            throw new Error("Preencha os campos 'userId' 'postId ' e 'comment' ")
        }

        if (!token) {
            throw new Error("Informe um token válido!")
        }

        const userToken = new Authenticator().getTokenData(token)

        if(userToken == null) {
            throw new Error("Você precisa de um token válido!")
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