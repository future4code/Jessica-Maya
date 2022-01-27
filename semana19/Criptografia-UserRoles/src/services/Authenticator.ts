import { JwtPayload, sign, verify } from "jsonwebtoken";
import { authenticationData } from "../types";
import dotenv from 'dotenv'

dotenv.config()

const expiresIn = "1min"

export class Authenticator {

  generateToken = (
    payload: authenticationData 
  ) => {
    const token = sign(
      payload,
      process.env.JWT_SECRET as string
      ) as string

    return token;
  }

}

export const getByUser = (token: string): AuthenticationData => {
  const payload = verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
    role: payload.role,
  };
  return result;
}


export type AuthenticationData =  {
id: string,
role: string

}

