import { getUserAll } from "../data/getUserAll";
import {Request, Response} from "express"
import { getData } from "../data/getData";

export const getAllUserBusiness = async(
    token: string
) =>  {

   
         getData(token)
    
        return await getUserAll();   

        

}