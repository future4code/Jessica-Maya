import { PostDataBase } from "../data/PostDataBase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"


export class createPostBusiness {

    createPost = async(post: any, token: string) => {
        if(
            !post.photo ||
            !post.description ||
            !post.creationData ||
            !post.type ||
            !post.userId
        ) {
            throw new Error("Preencha os campos 'photo', 'description', 'creationData', 'type' e 'userId' ")
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

        await new PostDataBase().insertPost({
            id,
            photo: post.photo,
            description: post.description,
            creationData: post.creationData,
            type: post.type,
            userId: post.userId
        })
    }
}