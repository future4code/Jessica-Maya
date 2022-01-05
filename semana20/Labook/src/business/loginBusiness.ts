import { compare } from "bcryptjs"
import { UserDataBase } from "../data/UserDataBase"
import { login, users} from "../model/User"
import { Authenticator } from "../services/Authenticator"


export class UserBusinessLogin {

    loginBusiness = async(login: login): Promise<string> => {

        if(!login.email || 
           !login.password) {
               throw new Error(" 'email' e 'senha' são obrigatórios")
           }

        const user: users = await new UserDataBase().selectUserByEmail(login.email)

        if(!user) {
            throw new Error("Usuário não encontrado ou senha incorreta.")
        }
        
        const passwordIsCorrect: boolean = await compare(login.password, user.password)

        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const token: string = new Authenticator().generateToken({
            id: user.id
        })

        return token
    }
}