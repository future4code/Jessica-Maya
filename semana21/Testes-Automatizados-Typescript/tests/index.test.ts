import { User } from "../src/model/User"
import { Casino, LOCATION, NACIONALITY, UserCasino } from "../src/model/UserCasino"
import { performaPurchase, verifyAge }from "../src/tests"

describe("index.ts", () => {

    test("Usuário com o saldo maior do que o valor de compra", () => {
        const user: User = {
            name: "Astrodev",
            balance: 150
        }

        const result = performaPurchase(user, 75)

        expect(result).toEqual({
            name: "Astrodev",
            balance: 75
        })
    })

    test("Usuário com o saldo igual ao valor de compra", () => {
        const user: User = {
            name: "Astrodev",
            balance: 60
        }

        const result = performaPurchase(user, 60)

        expect(result).toEqual({
            name: "Astrodev",
            balance: 0
        })
    })

    test("Usuário com o saldo menor do que o valor de compra", () => {

        const user: User = {
            name: "Atrodev",
            balance: 10
        }

        const result = performaPurchase(user, 50)

        expect(result).not.toBeDefined()
    })

    test("Usuário brasileiro que possa entrar em um estabelecimento no Brasil", () => {
        const brazilian: UserCasino = {
            name: "Astrodev",
            age: 20,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Casino Start",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [brazilian])
        expect(result.brazilians.allowed).toEqual(["Astrodev"])
    })

    test("Usuário americando que possa entrar em um estabelecimento no Brasil", () => {
        const brazilian: UserCasino = {
            name: "Astrodev",
            age: 18,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casino Lunar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [brazilian])
        expect(result.americans.allowed).toEqual(["Astrodev"])
    })

    test(`Dois usuários brasileiros e dois americanos. Todos devem ter a idade de
     19 anos e quererem entrar em um estabelecimento nos Estados Unidos.`, () => {

        const brazilians: UserCasino = {
            name: "Astrodev Br",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN  
        }
        const americans: UserCasino = {
            name: "Astrodev Eua",
            age: 19,
            nacionality: NACIONALITY.AMERICAN  
        }

        const casino: Casino = {
            name: "Star de Money",
            location: LOCATION.EUA  
        }

        const result = verifyAge(casino, [
            brazilians,
            brazilians,
            americans,
            americans
        ])

        expect(result.brazilians.unallowed).toEqual(["Astrodev Br", "Astrodev Br"])
        expect(result.americans.unallowed).toEqual(["Astrodev Eua", "Astrodev Eua"])
    })

    test(`Dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os
     americanos 21 anos.Eles querem estrar em um estabelecimento nos Estados Unidos.`, () => {

        const brazilians: UserCasino = {
            name: "Astrodev Br",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN  
        }
        const americans: UserCasino = {
            name: "Astrodev Eua",
            age: 21,
            nacionality: NACIONALITY.AMERICAN  
        }

        const casino: Casino = {
            name: "Star de Money",
            location: LOCATION.EUA  
        }

        const result = verifyAge(casino, [
            brazilians,
            brazilians,
            americans,
            americans
        ])

        expect(result.brazilians.unallowed).toEqual(["Astrodev Br", "Astrodev Br"])
        expect(result.americans.unallowed).toEqual(["Astrodev Eua", "Astrodev Eua"])
    })

    test("Usuário brasileiro que possa entrar em um estabelecimento no Brasil...", () => {
        const brazilian: UserCasino = {
            name: "Astrodev",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "LuzCasinos",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [brazilian])
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })

    test("Um usuário americano que possa entrar em um estabelecimento no Brasil.", () => {
        const brazilian: UserCasino = {
            name: "Astrodev",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casines",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [brazilian]);
        expect(result.americans.unallowed.length).toBe(0);
      });

      test(`dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e
       quererem entrar em um estabelecimento nos Estados Unidos.`, () => {
        const brazilian: UserCasino = {
          name: "Astrodev Br",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: UserCasino = {
          name: "Astrodev Eua",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Casines",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
    
        expect(result.brazilians.unallowed).toContain("Astrodev Br");
        expect(result.americans.unallowed).toContain("Astrodev Eua");
      });

      test(`dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e 
      os americanos 21 anos.`, () => {
        const brazilian: UserCasino = {
          name: "Astrodev Br",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: UserCasino = {
          name: "Astrodev Eua",
          age: 21,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Casines",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
        expect(result.americans.unallowed.length).toBeLessThan(1);
        expect(result.americans.allowed.length).toBe(2);
      });



})
