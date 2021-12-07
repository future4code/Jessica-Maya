export interface client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number
  }

export class Client implements client {
    
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
    ) {
        console.log("Consegui criar com sucesso!");
    }

    calculateBill = (): number =>  { 
        return  2 
    }   
      
  }
  

  