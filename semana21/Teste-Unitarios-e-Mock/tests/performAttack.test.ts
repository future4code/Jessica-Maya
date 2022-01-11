import { errorMonitor } from "events"
import { performAttack } from "../src/performAttack"
import { CharacterPerson } from "../src/validateCharacter"

describe("Testing performAttack", () => {
    test("Should return sucess", () => {
        try {
            const attacker: CharacterPerson = {
            name: "Astrodev",
            life: 1500,
            force: 900,
            defense: 600
            }

            const defense: CharacterPerson = {
            name: "Bob",
            life: 1500,
            force: 400,
            defense: 800
            }

            const validatorMock = jest.fn(() => {
                return true
            })

           performAttack(attacker, defense, validatorMock)

            expect(defense.life).toEqual(1400)
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(2)
            expect(validatorMock).toHaveReturnedTimes(2)

        } catch (error) {
            throw error
        }
    })

    test("Should return in error", () => {
        try {
            const attacker: CharacterPerson = {
            name: "Astrodev",
            life: 1500,
            force: 1000,
            defense: 1600
            }

            const defense: CharacterPerson = {
            name: "",
            life: 1500,
            force: 400,
            defense: 800
            }

            const validatorMock = jest.fn(() => {
                return false
            })

            performAttack(attacker, defense, validatorMock)


        } catch (error) {
            expect(error.message).toContain("Invalid Character")
        }
    })

    test("Should return sucess", () => {
        try {
            const attacker: CharacterPerson = {
            name: "Shas",
            life: 1500,
            force: 1000,
            defense: 1600
            }

            const defense: CharacterPerson = {
            name: "Defen",
            life: 1500,
            force: 600,
            defense: 800
            }

            const validatorMock = jest.fn(() => {
                return true
            })

            performAttack(attacker, defense, validatorMock)

            expect(defense.life).toEqual(1300)
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(2)
            expect(validatorMock).toHaveReturnedTimes(2)

        } catch (error) {
            throw error
        }
    })

    test("Should return false for defense 0 attacker", () => {
        try {
            const attacker: CharacterPerson = {
            name: "Shas",
            life: 1500,
            force: 1000,
            defense: 0
            }

            const defense: CharacterPerson = {
            name: "Defen",
            life: 1500,
            force: 600,
            defense: 800
            }

            const validatorMock = jest.fn(() => {
                return false
            })

            performAttack(attacker, defense, validatorMock)
            

        } catch (error) {
            expect(error.message).toContain("Invalid Character")
        }
    })

    test("Should return false for force 0 defense", () => {
        try {
            const attacker: CharacterPerson = {
            name: "Shas",
            life: 1500,
            force: 1000,
            defense: 900
            }

            const defense: CharacterPerson = {
            name: "Defen",
            life: 1500,
            force: 0,
            defense: 800
            }

            const validatorMock = jest.fn(() => {
                return false
            })

            performAttack(attacker, defense, validatorMock)
            

        } catch (error) {
            expect(error.message).toContain("Invalid Character")
        }
    })

    test("Should return false for life 0 attacker", () => {
        try {
            const attacker: CharacterPerson = {
            name: "Shas",
            life: 0,
            force: 1000,
            defense: 900
            }

            const defense: CharacterPerson = {
            name: "Defen",
            life: 1500,
            force: 600,
            defense: 800
            }

            const validatorMock = jest.fn(() => {
                return false
            })

            performAttack(attacker, defense, validatorMock)
            

        } catch (error) {
            expect(error.message).toContain("Invalid Character")
        }
    })
})
