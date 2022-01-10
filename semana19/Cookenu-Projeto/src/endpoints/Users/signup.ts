import { Request, Response } from "express"
import { UserDataBase } from "../../data/UserDataBase"
import { User } from "../../entities/User"
import { Authenticator } from "../../services/Authenticator"
import { HashManager } from "../../services/HashManager"
import { IdGenerator } from "../../services/IdGenerator"

export async function signup(req: Request, res: Response) {
    try{
        const {email, password, name, role} = req.body

        if(!name || !email || !password || !role) {
            res.status(422).send("Insira corretamente as informações de 'name', 'email', 'password' e 'role'")
        }

        if (!email.includes("@") || !email.includes(".com")) {
            res.status(422).send('Formato de e-mail inválido. O e-mail deve conter "@" e ".com" ');
        }

        if(!password || password.length < 6) {
            res.status(422).send("Senha inválida por favor a senha deve ter 6 caractres ou mais");
        }

        const userDataBase = new UserDataBase()
        const user = await userDataBase.findUserEmail(email)

        if(user) {
            res.status(409).send("Esse email já está cadastrado")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id, email, hashPassword, name, role)
        await userDataBase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({id, role})

        res.status(200).send({message: "Usuario criado com sucesso", token})
    }catch (error){
        res.send(error.sqlMessage || error.message)
    }
}