import { dontfriends, Friends, friends } from "../model/friendsUser"
import { posts } from "../model/Post"
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

    getAllFriends = async(friend: Friends): Promise<Friends> => {
        try {
            const friendsUsers = await BaseDataBase.connection("labook_friend")
            .select("*")
            .where({userFriend: friend.getUserFriend(), beAFriendOfTheUser: friend.getBeAFriendOfTheUser()})
            
            return friendsUsers[0] && Friends.toFriendsModel(friendsUsers[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    
    getFeedFriends = async(userFriend: string, order: string, sort: string, size: number, offset: number): Promise <posts[]> => {
        try {
             const friendsPost = await BaseDataBase.connection("labook_post")
             .innerJoin("labook_curtida", "labook_curtida.userId", "labook_curtida.userId")
             .innerJoin("labook_friend", "labook_friend.beAFriendOfTheUser", "labook_friend.beAFriendOfTheUser")
             .select("labook_post.id", "labook_post.photo", "labook_post.description",
             "labook_post.creationData", "labook_post.type","labook_curtida.userId")
             .orderBy(sort, order)
             .limit(size)
             .offset(offset)
            
            return friendsPost
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}