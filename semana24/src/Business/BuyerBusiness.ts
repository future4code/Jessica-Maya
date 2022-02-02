import { BuyerDataBase } from "../data/BuyerDataBase";
import { MissingFieldsToComplet } from "../Error/MissingFieldsToComplet";
import { BuyerInputDTO, BuyerInsert } from "../Model/Buyer";
import IdGenerator from "../Services/IdGenerator";

export class BuyerBusiness {
    async insertBuyer(input: BuyerInsert) {
        
        if(!input.name || !input.email || !input.cpf || !input.id_client) {
            throw new MissingFieldsToComplet()
        }

        if(!input.email.includes("@") || !input.email.includes(".")) {
            throw new Error("Invalid email, missing @ or .com")
        }

        const buyer: BuyerInputDTO = {
            id: IdGenerator.generate(),
            ...input
        }

        const buyerDataBase = new BuyerDataBase()
        const buyerId = await buyerDataBase.buyerFindById(buyer.id)

        if(buyerId) {
            throw new Error("Customer is already registered")
        }

        const newBuyer = await buyerDataBase.insertBuyer(buyer)

        return newBuyer
    }
}