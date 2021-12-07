import app from "./app"


/*EXERCICIO 1

 a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?

 R. O construtor determina que ações devem ser executadas quando da criação de um objeto, 
 o desenvolvedor terá acesso à classe, às suas variáveis e métodos e sempre serão chamados em tempo de execução 
e disponibilizarão a criação de um objeto desta classe.

b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe
 (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem "Chamando o
  construtor da classe User" foi impressa no terminal?

R. Apenas 1 vez

c) Como conseguimos ter acesso às propriedades privadas de uma classe?

R. Pela instancia pegando as propriedades e deixando elas publicas

*/

class Transaction {
        private date: string;
        private value: number;
        private description: string;

        constructor(
          date: string,
          value: number,
          description: string,

          ) {
          console.log("Chamando o construtor da classe Transaction")
          this.date = date;
          this.value = value;
          this.description = description;
        }


        public getDate(): string {
                return this.date
                
                }
            
        public getValue(): number {
                return this.value
                }
            
        public getDescription(): string {
                return this.description
                }
        
      }

 const myTransaction = new Transaction('23/12/2021', 300, "Transaction enviada com sucesso.")

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) { 
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    setTransactions(newTransaction: Transaction) : void {
        console.log(this.transactions)
        this.transactions.push(newTransaction)
}

        getTransaction(): Transaction[]{
        return this.transactions
        }

    public getCpf(): string {
            return this.cpf
            
            }
        
    public getName(): string {
            return this.name
            }
        
    public getAge(): number {
            return this.age
            }

  }

   const myUser = new UserAccount('222.111.333-21','Jessica', 25)
   console.log(myUser.getCpf())
   console.log(myUser.getName())
   console.log(myUser.getAge())
   myUser.setTransactions(myTransaction)
   console.log(myUser.getTransaction())
   console.log("")


   class Bank {
        private accounts: UserAccount[];
        private transaction: Transaction[]
      
        constructor(
            accounts: UserAccount[],
            transaction: Transaction[]
            ) {
          this.accounts = accounts;
          this.transaction = transaction
        }

        setAccounts(newAccounts: UserAccount) : void {
                console.log(this.accounts)
                this.accounts.push(newAccounts)
        }
        
                getAccounts(): UserAccount[]{
                return this.accounts
                }
        
                setTransactions(newTransaction: Transaction) : void {
                        console.log(this.transaction)
                        this.transaction.push(newTransaction)
        }
                
                getTransaction(): Transaction[]{
                        return this.transaction
                        }

      }
  const myAccounts= new Bank([], [])
   myAccounts.setAccounts(myUser)
   console.log(myAccounts.getAccounts())
   myAccounts.setTransactions(myTransaction)
   console.log(myAccounts.getTransaction())
   console.log("")