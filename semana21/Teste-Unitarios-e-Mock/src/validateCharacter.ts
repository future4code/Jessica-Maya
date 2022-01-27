export interface CharacterPerson {
    name: string,
    life: number,
    force: number,
    defense: number,

}
export const validateCharacter = (input: CharacterPerson): boolean => {
    if(
        !input.name ||
        input.life === undefined ||
        input.force === undefined || 
        input.defense === undefined
    ) {
        return false
    }

    if(
        input.life <= 0 || input.force <=0 || input.defense <= 0
    ) {
        return false
    } else {
        return true
    }
}