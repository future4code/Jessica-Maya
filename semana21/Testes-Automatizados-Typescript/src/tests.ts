import { User } from "./model/User";
import { Casino, LOCATION, NACIONALITY, Result, UserCasino } from "./model/UserCasino";

export const performaPurchase = (user: User, value: number): User | undefined => {
        if(user.balance >= value){
            return {
                ...user,
                balance: user.balance - value
            }
        }
        return undefined
}

export const verifyAge = (casino: Casino, users: UserCasino[]): Result  => {

    const allowed: UserCasino[] = []
    const unallowed: UserCasino[] = []

    for (let user of users) {
        if(casino.location === LOCATION.EUA) {
            if(user.age >= 21) {
                allowed.push(user)
            } else {
                unallowed.push(user)
            }
        } else if(casino.location === LOCATION.BRAZIL) {
            if(user.age >= 18){
                allowed.push(user)
            } else {
                unallowed.push(user)
            }
            break
        }
    }

    return {
        brazilians: {
            allowed: allowed.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((user) => user.name),
            unallowed: unallowed.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((user) => user.name)
        },

        americans: {
            allowed: allowed.filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((user) => user.name),
            unallowed: unallowed.filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((user) => user.name)
        }
    }

}

