import { LikeByIdPostDataBase } from "../data/LikeDataBase"
import { Authenticator } from "../services/Authenticator"


export class dontLikePostByIdBusiness {

    dontLikeById = async (like: any, token: string) => {
        if (
            !like.userId ||
            !like.postId
        ){
            throw new Error("Preencha os campos 'userId' e 'postId' ")
        }

        if (!token) {
            throw new Error("Informe um token válido!")
        }

        const userPost = new Authenticator().getTokenData(token)

            if(userPost == null) {
                throw new Error("Você ja descurtiu o post!")
            }


        await new LikeByIdPostDataBase().dontLikePost({
            userId: like.userId,
            postId: like.postId

        })
    }
    
}