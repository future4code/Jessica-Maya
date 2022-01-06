import { dontfriends, friends } from "../model/friendsUser"
import { BaseDataBase } from "./BaseDataBase"


export class FriendsUserDataBase extends BaseDataBase {

    beFriend = async(friend: friends) => {
        try {
            await BaseDataBase.connection("labook_friend")
            .insert({
                userFriend: friend.userFriend,
                beAFriendOfTheUser: friend.beAFriendOfTheUser 
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
        
    }

    dontFriendsUser = async(friend: dontfriends) => {
        try {
            await BaseDataBase.connection("labook_friend")
            .delete()
            .where({
                userFriend: friend.userFriend,
                beAFriendOfTheUser: friend.beAFriendOfTheUser 
            })
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}