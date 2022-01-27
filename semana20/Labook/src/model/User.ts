
export interface login {
  
    email: string,
    password: string
    
 }

 export interface authenticationData {
    id: string
 }
    
 export interface users extends authenticationData, login {
  
    name:string
    
 }
    
    