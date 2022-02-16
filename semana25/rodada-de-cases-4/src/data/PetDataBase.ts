import { PetInsert } from "../model/Pets";
import { BaseDataBase } from "./BaseDataBase";

export class PetDataBase extends BaseDataBase {
    private static TABLE_NAME = "dogWalking_pet"

    async insertPets (pets: PetInsert){
       try {
           await this.getConnection()
           .insert(pets)
           .into(PetDataBase.TABLE_NAME)
       } catch (error) {
        if(error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error("An unexpected database error occurred!")
        }
      }
    }

    async findPetByEmail (email: string): Promise<PetInsert>{
        try {
            const [petByEmail] = await this.getConnection()
            .select("*")
            .where({email})
            .from(PetDataBase.TABLE_NAME)

            return petByEmail
            
        } catch (error) {
         if(error instanceof Error) {
             throw new Error(error.message)
         } else {
             throw new Error("An unexpected database error occurred!")
         }
       }
     }
}
