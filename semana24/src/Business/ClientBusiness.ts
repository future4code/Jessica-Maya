import { ClientDataBase } from "../data/ClientDataBase";
import { MissingFieldsToComplet } from "../Error/MissingFieldsToComplet";
import { ClientInputDTO, ClientInsert } from "../Model/Client";
import IdGenerator from "../Services/IdGenerator";

export class ClientBusiness {
    async insertClient(input: ClientInsert) {
        
        if(!input.name || !input.cnpj || !input.address || !input.telephone) {
            throw new MissingFieldsToComplet()
        }

        const client: ClientInputDTO = {
            id: IdGenerator.generate(),
            ...input
        }

        const clientDataBase = new ClientDataBase()
        const clientCnpj = await clientDataBase.clientFindByCnpj(input.cnpj)

        if(clientCnpj) {
            throw new Error("Customer is already registered")
        }

        const newClient = await clientDataBase.insertClient(client)

        return newClient
    }
}