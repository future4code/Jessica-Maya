import { LikeByIdPostDataBase } from "../data/LikeDataBase"
import { likePost } from "../model/LikePost"
import { Authenticator } from "../services/Authenticator"

export class likePostByIdBusiness {

    insertLikeById = async(like: likePost, token: string) => {
        if (
            !like.postId
        ){
            throw new Error("Preencha os campos 'userId' e 'postId' ")
        }

        if (!token) {
            throw new Error("Informe um token válido!")
        }

        const userPost = new Authenticator().getTokenData(token)

        if(userPost == null) {
            throw new Error("Informe um token válido!")
        }

        await new LikeByIdPostDataBase().insertLikePost({
            userId: userPost.id,
            postId: like.postId
        })
    }
}