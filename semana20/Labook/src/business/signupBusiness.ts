import { UserDataBase } from "../data/UserDataBase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

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


        await new UserDataBase().insertUser({
            id,
            name: user.name,
            email: user.email,
            password: cypherPassword})

        const token: string = new Authenticator().generateToken({
            id
        })

        return token
    }
}