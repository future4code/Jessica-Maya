export abstract class Place {
    constructor(
      protected cep: string
        ) {
            
        }
  
      public getCep(): string {
          return this.cep;
    }
  }

  export class myPlace extends Place {
    
    constructor(
      cep:string     // Exercicio mostrando como usar uma classe Abstract
    ) {
      super(cep)
     
    }
    
}

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,

    cep: string
  ) {
    super(cep);
  }

  public getResidentsQuantity(): number {
    return this.residentsQuantity
  }
}

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,

    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity
  }
}

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    
    cep: string
		) {
	    super(cep);
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity
  }
}


