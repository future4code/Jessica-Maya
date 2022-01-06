import { FriendsUserDataBase } from "../data/friendsUserDataBase"

export class notBeFriendBusiness {

    dontFriend = async (friend: any) => {
        if (
            !friend.userFriend ||
            !friend.beAFriendOfTheUser
        ){
            throw new Error("Preencha os campos 'userFriend' e 'beAFriendOfTheUser' ")
        }

        await new FriendsUserDataBase().dontFriendsUser({
            userFriend: friend.userFriend,
            beAFriendOfTheUser: friend.beAFriendOfTheUser

        })
    }
    
}