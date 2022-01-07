import { FriendsUserDataBase } from "../data/FriendsUserDataBase"
import { posts } from "../model/Post"
import { Authenticator } from "../services/Authenticator"


export class getPostFriendsBusiness {
    getPostFriends = async(token: string, sort: string, order: string, size: number, offset: number): Promise<posts[] | undefined> => {
        try {
            
            if (!token) {
                throw new Error("Informe um token válido!")
            }
    
            const tokenData = new Authenticator().getTokenData(token)
    
            if(!tokenData) {
                throw new Error("Não autorizado!")
            }
    
            const getPostFriend = await new FriendsUserDataBase().getFeedFriends(tokenData.id, sort, order, size, offset)
    
            if (!getPostFriend) {
                throw new Error("Sem posts")
            }

            return getPostFriend

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    
    
    
}