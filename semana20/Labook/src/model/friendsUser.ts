export interface friends {
    userFriend: string,
    beAFriendOfTheUser: string
}

export interface dontfriends {
    userFriend: string,
    beAFriendOfTheUser: string
}

export type friendInsert = {
    beAFriendOfTheUser: string
}


export class Friends {
    constructor(
    private userFriend: string,
    private beAFriendOfTheUser: string
    ){}
        public getUserFriend() {
            return this.userFriend
        }

        public getBeAFriendOfTheUser() {
            return this.beAFriendOfTheUser
        }
    
    static toFriendsModel(data: any): Friends {
        return new Friends(data.userFriend, data.beAFriendOfTheUser)
    }

}
