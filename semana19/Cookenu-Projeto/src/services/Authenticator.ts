import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { USER_ROLES } from "../entities/User"


dotenv.config()
export interface AuthenticationData {
    id: string
    role: USER_ROLES
}

export class Authenticator {
    public generate(input: AuthenticationData): string {
        const token = jwt.sign(input, process.env.JWT_KEY, {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
        })
        return token
    }

    public getTokenData(token: string): AuthenticationData {
        try{
            const data = jwt.verify(token, process.env.JWT_KEY)
            return data as AuthenticationData
            
        }catch(error) {
            console.log(error)
        }
    }
}