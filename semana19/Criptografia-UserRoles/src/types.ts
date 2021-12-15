export enum USER_ROLES{
   GUEST = "normal",
   ADMIN = "admin"
 }
 
 export interface authenticationData {
    id:string
    role: USER_ROLES
 }
 
 export interface user extends authenticationData {
    email: string
    name: string
    nickname: string
    password:string
 }