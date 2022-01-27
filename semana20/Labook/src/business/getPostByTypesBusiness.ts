import { PostDataBase } from "../data/PostDataBase"
import { posts } from "../model/Post"
import { Authenticator } from "../services/Authenticator"


export class getPostTypesBusiness {
    getPostTypes = async(token: string, type: string,  sort: string, order: string): Promise<posts[] | undefined> => {
        try {
            
            if (!token) {
                throw new Error("Informe um token válido!")
            }
    
            const tokenData = new Authenticator().getTokenData(token)
    
            if(!tokenData) {
                throw new Error("Não autorizado!")
            }
    
            const getPostType = await new PostDataBase().getPostByType(tokenData.id, type, order, sort)
    
            if (!getPostType) {
                throw new Error("Sem posts")
            }

            return getPostType

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    
    
    
}