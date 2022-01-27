import { FriendsUserDataBase } from "../data/FriendsUserDataBase"
import { Authenticator } from "../services/Authenticator"

export class dontFriendUserBusiness {

    dontFriend = async (friend: any, token: string) => {
        if (
            !friend.userFriend ||
            !friend.beAFriendOfTheUser
        ){
            throw new Error("Preencha os campos 'userFriend' e 'beAFriendOfTheUser' ")
        }

        if (!token) {
            throw new Error("Informe um token válido!")
        }

        const tokenData = new Authenticator().getTokenData(token)
    
            if(!tokenData) {
                throw new Error("Não autorizado!")
            }

            const userFriend = new Authenticator().getTokenData(token)

            if(userFriend == null) {
                throw new Error("Você não é mais amigo do usuário!")
            }

        await new FriendsUserDataBase().dontFriendsUser({
            userFriend: friend.userFriend,
            beAFriendOfTheUser: friend.beAFriendOfTheUser

        })
    }
    
}