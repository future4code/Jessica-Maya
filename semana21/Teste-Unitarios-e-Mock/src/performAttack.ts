import { CharacterPerson } from "./validateCharacter";

export const performAttack = (
    attacker: CharacterPerson,
     defender: CharacterPerson,
     validator: (input: CharacterPerson) => boolean
     ) => {

        if(
            !validator(attacker) ||
            !validator(defender) 
          ) {
              throw new Error("Invalid Character")
          }
        
        if(
             attacker.force > defender.defense
          ) {
            defender.life -= attacker.force - defender.defense
        }

}