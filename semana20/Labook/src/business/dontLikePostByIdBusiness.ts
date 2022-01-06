import { LikeByIdPostDataBase } from "../data/LikeDataBase"


export class dontLikePostByIdBusiness {

    dontLikeById = async (like: any) => {
        if (
            !like.userId ||
            !like.postId
        ){
            throw new Error("Preencha os campos 'userId' e 'postId' ")
        }

        await new LikeByIdPostDataBase().dontLikePost({
            userId: like.userId,
            postId: like.postId

        })
    }
    
}