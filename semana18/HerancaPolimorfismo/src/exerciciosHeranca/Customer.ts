import { User } from "./User";

export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string,
      purchaseTotal: number
    ) {
      super(id, email, name, password)
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
      this.purchaseTotal = purchaseTotal
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
    // setPurchaseTotal(valor: number) {
    //    return valor * this.purchaseTotal
    // }
}