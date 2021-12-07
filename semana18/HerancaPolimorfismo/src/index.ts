import app from "./app"
import { Client } from "./exercicioPolimorfismo/Client";
import { Place } from "./exercicioPolimorfismo/Place";
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

//   const newPlace = new Place("123.432.234-11")
///   console.log(newPlace)