import { compare } from "bcryptjs"
import { UserDataBase } from "../data/UserDataBase"
import { User } from "../model/User"
import { Authenticator } from "../services/Authenticator"


export class UserBusinessLogin {

    loginBusiness = async(login: User): Promise<string> => {

        if(!login.getEmail() || 
           !login.getPassword()) {
               throw new Error(" 'email' e 'senha' são obrigatórios")
           }

        const user: User = await new UserDataBase().selectUserByEmail(login.getEmail())

        if(!user) {
            throw new Error("Usuário não encontrado ou senha incorreta.")
        }
        
        const passwordIsCorrect: boolean = await compare(login.getPassword(), user.getPassword())

        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const token: string = new Authenticator().generateToken({
            id: user.getId
        })

        return token
    }
}