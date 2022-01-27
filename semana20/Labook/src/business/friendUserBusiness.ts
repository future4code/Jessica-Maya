import { FriendsUserDataBase } from "../data/FriendsUserDataBase"
import { friendInsert } from "../model/friendsUser"
import { Authenticator } from "../services/Authenticator"
import { Friends } from "../model/friendsUser"

export class friendUserBusiness {
    insertFriendUser = async(friend:friendInsert, token: string) => {
        if (
            !friend.beAFriendOfTheUser
        ){
            throw new Error("Preencha os campos 'userFriend' e 'beAFriendOfTheUser'")
        }
        
            if (!token) {
                throw new Error("Informe um token válido!")
            }

            const userId = new Authenticator().getTokenData(token)

            if(userId == null) {
                throw new Error("Você ja é amigo do usuário!")
            }

            const likeUserDataBase = new Friends(userId.id, friend.beAFriendOfTheUser)

            const friendIs = await new FriendsUserDataBase().getAllFriends(likeUserDataBase)

            if(friendIs) {
                throw new Error("Você já é amigo do usuário o usuário.")
            }
    
            if (userId.id === friend.beAFriendOfTheUser) {
                throw new Error("Você não pode ser amigo de você mesmo!")
            }

        await new FriendsUserDataBase().beFriend({
            userFriend: userId.id,
            beAFriendOfTheUser: friend.beAFriendOfTheUser
        })
    }
}