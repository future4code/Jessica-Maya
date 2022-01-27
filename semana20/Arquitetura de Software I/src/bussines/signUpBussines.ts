import { hash } from "../services/hashManager"
import { insertUser } from "../data/insertUser"
import { generateToken } from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { user } from "../types/user"

export const signUpBussines = async (user: any): Promise<string> => {

    if(
        !user.name || 
        !user.email ||
        !user.password ||
        !user.role
    ) {
        throw new Error('Preencha os campos "name", "email", "password" e "role"')
    }

    const id: string = generateId()

    const cypherPassword = await hash(user.password)

    await insertUser({
        id, 
        name: user.name,
        email: user.email,
        password: cypherPassword,
        role: user.role
    })

    const token: string = generateToken({
        id,
        role: user.role
    })

    return token
}
