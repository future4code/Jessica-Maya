export class Pets {
    constructor(
        private id: string,
        private name_owner: string,
        private email: string,
        private name_pet: string
    ) {}

    static petModel(pet: Pets) {
        return new Pets(pet.id, pet.name_owner, pet.email, pet.name_pet)
    }
}

export interface PetInputDTO {
    name_owner: string,
    email: string,
    name_pet: string
}

export interface PetInsert extends PetInputDTO {
    id: string
}