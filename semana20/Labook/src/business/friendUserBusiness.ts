import { FriendsUserDataBase } from "../data/friendsUserDataBase"
import { friendInsert } from "../model/friendsUser"
import { Authenticator } from "../services/Authenticator"

export class friendUserBusiness {
    insertFriendUser = async(friend:friendInsert, token: string) => {
        if (
            !friend.beAFriendOfTheUser
        ){
            throw new Error("Preencha os campos 'userId' e 'postId'")
        }
        
            if (!token) {
                throw new Error("Informe um token válido!")
            }

            const userId = new Authenticator().getTokenData(token)

            if(userId == null) {
                throw new Error("Informe um token válido!")
            }

        await new FriendsUserDataBase().beFriend({
            userFriend: userId.id,
            beAFriendOfTheUser: friend.beAFriendOfTheUser
        })
    }
}