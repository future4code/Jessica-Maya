import app from "./app"
import { Client } from "./exercicioPolimorfismo/Client";
import { Commerce, Industry, myPlace, Place, Residence } from "./exercicioPolimorfismo/Place";
import { Customer } from "./exerciciosHeranca/Customer";
import { User } from "./exerciciosHeranca/User";

// Exercicios Herança
const newUser = new User("01", "jessicabento@gmail.com", "Jéssica", "123456")
  console.log(newUser.getId())
  console.log(newUser.getName())
  console.log(newUser.getEmail())
  console.log("")

const newCustomer = new Customer("01", "jessicabento@gmail.com", "Jéssica", "123456", "120394535212453", 30)
  console.log("Id: " + newCustomer.getId())
  console.log("Nome: " + newCustomer.getName())
  console.log("Email: " + newCustomer.getEmail())
  console.log("Cartão de Crédito: " + newCustomer.getCreditCard())
//console.log(newCustomer.setPurchaseTotal(10))
  console.log(`Valor da compra R$${newCustomer.purchaseTotal},00`)
  console.log(newCustomer.interoduceYourself())
  
  // Exercicios Polimorfismo

  const newClient = new Client("Bob", 1, 100)
  console.log("Registro do cliente: " + newClient.registrationNumber)
  console.log("Nome do Cliente " + newClient.name)
  console.log("Consumo de energia " + newClient.consumedEnergy)
  console.log("Calculo de energia " + newClient.calculateBill())
  console.log("")

//   const newPlace = new Place("123.432.234-11")
///   console.log(newPlace) // ESSA INSTANCIA DA ERRO!  

const newPlace = new myPlace("35588000")
console.log("Classe Myplace com extends Place: " + newPlace.getCep())
console.log("")

const newResidence = new Residence(21, "35221-011")
console.log("Classe Residence com extends Place: " + newResidence.getCep())
console.log("")

const newCommerce = new Commerce(10, "43392-123")
console.log("Classe Commerce com extends Place: " + newCommerce.getCep())
console.log("")

const newIndustry = new Industry(350, "980321-285")
console.log("Classe Industry com extends Place: " + newIndustry.getCep())
console.log("")