import { validateCharacter } from "../src/validateCharacter"

describe("Testing validateCharacter", () => {

    test("Should return false for empty name", () => {
        const validateName = validateCharacter({
            name: "",
            life: 2000,
            force: 500,
            defense: 100
        })
        expect(validateName).toBe(false)
    })

    test("Should return false for life 0", () => {
        const validateLife = validateCharacter({
            name: "Astrodev",
            life: 0,
            force: 2300,
            defense: 1900
        })
        expect(validateLife).toBe(false)
    })

    test("Should return false for force 0", () => {
        const validateForce = validateCharacter({
            name: "Scot",
            life: 5000,
            force: 0,
            defense: 1000
        })
        expect(validateForce).toBe(false)
    })

    test("Should return false for defense 0", () => {
        const validateDefense = validateCharacter({
            name: "Agus",
            life: 5000,
            force: 3000,
            defense: 0
        })
        expect(validateDefense).toBe(false)
    })

    test("Should return false for life, or the force, or the defense with a negative value", () => {
        const validateNegative = validateCharacter({
            name: "lorous",
            life: -300,
            force: 200,
            defense: 100
        })
        expect(validateNegative).toBe(false)
    })

    test("Should return true for all valid inputs", () => {
        const validate = validateCharacter({
            name: "flus",
            life: 2100,
            force: 1500,
            defense: 900
        })
        expect(validate).toBe(true)
    })
})