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
        
        if (!user.email.includes("@") || !user.email.includes(".com")) {
            throw new Error('Formato de e-mail inválido. O e-mail deve conter "@" e ".com" ');
        }

        if(!user.password || user.password.length < 6) {
            throw new Error("Senha inválida por favor a senha deve ter 6 caractres ou mais");
        }

        const userDataBase = new UserDataBase()
        const userEmail = await userDataBase.findUserEmail(user.email)

        if(userEmail) {
            throw new Error("Esse email já está cadastrado")
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