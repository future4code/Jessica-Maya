import { Hash } from "crypto"
import { UserDataBase } from "../data/UserDataBase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { User } from "../model/User"


export class UserBusiness {

    signupBusiness = async(user: any) => {

        if(
            !user.name ||
            !user.email ||
            !user.password  
        ) {
            throw new Error("Preencha os campos 'name', 'email' e 'password'")
        }

        const idGeneretor = new IdGenerator()
        const id = idGeneretor.generate()

        const hashManager = new HashManager()
        const cypherPassword = hashManager.createHash(user.password)

        const newUser = new User(id, user.name, user.email, cypherPassword)

        await new UserDataBase().insertUser(newUser)

        const token: string = new Authenticator().generateToken({
            id
        })

        return token
    }
}