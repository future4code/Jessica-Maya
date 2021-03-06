import { Request, Response } from "express"
import { UserDataBase } from "../../data/UserDataBase"
import { Authenticator } from "../../services/Authenticator"
import { HashManager } from "../../services/HashManager"

export async function login(req: Request, res: Response) {
    try{
        const {email, password} = req.body

        if(!email || !password) {
            res.status(422).send("Insira corretamente as informações de 'email' e 'password'")
        }

        const userDataBase = new UserDataBase()
        const user = await userDataBase.findUserEmail(email)

        if(!user) {
            res.status(409).send("Esse email não está cadastrado")
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, user.getPassword())

        if(!passwordIsCorrect){
            res.status(401).send("'Email' ou 'Senha' incorretos")
        }
        const authenticator = new Authenticator()
        const token = authenticator.generate({id: user.getId(), role: user.getRole()})

        res.status(200).send({message: "Usuario logado com sucesso", token})
    }catch (error){
    res.status(400).send(error.message)
    }
}