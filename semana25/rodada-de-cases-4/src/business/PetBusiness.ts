import { PetDataBase } from "../data/PetDataBase";
import { MissingFieldsToComplet } from "../error/MissingFieldsToComplet";
import { PetInputDTO, PetInsert } from "../model/Pets";
import IdGenerator from "../services/IdGenerator";


export class PetBusiness {
    createPetBusiness = async(input:PetInputDTO) => {
        if(!input.name_owner || !input.email || !input.name_pet) {
            throw new MissingFieldsToComplet()
        }

        if(!input.email.includes("@") || !input.email.includes(".com")) {
            throw new Error("Email invalid")
        }

        const pet : PetInsert = {
            id: IdGenerator.generate(), 
            ...input
        }

        const petDataBase = new PetDataBase()

        const petEmail =  await petDataBase.findPetByEmail(pet.email)

        if(petEmail) {
            throw new Error("Pet já cadastrado")
        }

         await petDataBase.insertPets(pet)


        return "Successfully registered pet data, pet ID is:  " + pet.id
    }
}