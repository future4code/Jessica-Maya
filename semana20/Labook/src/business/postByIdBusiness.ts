import { PostDataBase } from "../data/PostDataBase"
import { posts } from "../model/Post"
import { Authenticator } from "../services/Authenticator"

export class postByIdBusiness {

    postById = async (
        id: string,
        token: string
    ): Promise<posts | undefined> => {

        if (!token) {
            throw new Error("Informe um token válido!")
        }

        const tokenData = new Authenticator().getTokenData(token)
    
            if(!tokenData) {
                throw new Error("Não autorizado!")
            }
        
        const post = await new PostDataBase().getPostById(id)

        return post
    }
}