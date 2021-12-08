# **Exercicios sobre Herança**

### EXERCICIO 1

**A) Seria possível imprimir a senha (password) atrelada a essa instância?**

##### R. Não pois ele é uma propriedade privada e não tem uma metodo que deixa ela publica.

**B) Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?**

##### R. Uma vez

### EXERCICIO 2

**A) Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?**

##### R. Apenas 1 vez.

**B) Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?**

##### R. Duas vezes pois a primeira foi da classe User e a segunda da classe Customer.

### EXERCICIO 3

**A) Seria possível imprimir a senha `(password)` atrelada a essa instância? Por quê?**

##### R. Simm pois imprimindo a instância inteira, os atributos privados também serão mostrados.

# **Exercicios sobre Polimorfismo**

### Exercicio 1

**A) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?**

##### R. Consegui imprimir todas, porque todas as propriedades são publicas.

### Exercicio 2

**A) Mesmo sabendo que não é possível, tente criar uma instância dessa classe `(ou seja: new Place(...))`. Qual foi o erro que o Typescript gerou?**

##### R. Cannot create an instance of an abstract class.

**B) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?**

##### R. fazendo outra função filha e extendendo a classe pai Place para que instancia seja criada.

### Exercicio 3

**A) O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)**

##### R. Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

**B) Por que a Place não é uma interface?**

##### R. Porque é uma classe e precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se ser interface.

**C) Por que a classe Place é uma Classe Abstrata?**

##### R. Ela é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

### Exercicio 4 

**A) Que métodos e propriedades essa classe possui? Por quê?**

##### R. Essa Classe possui dois metodos, primeiro getCpf aonde a propriedade é privada e passou a ser publica com o metodo e o metodo calculateBill() que vem da interface Client e que esta calculando com o consumedEnergy. As Propriedades que essa classe tem são:
        ````Typescript
        ```public name: string,
           public registrationNumber: number,
           public consumedEnergy: number,
           private cpf: string,
           residentsQuantity: number,
           cep: string 
        ```
        ````
           
        
### Ecercicio 5

**A) Quais as semelhanças dessa classe com a ResidentialClient?**

##### R. A semelhança é que as duas estão usando propriedades da interface Client implementando na classe e calculando o consume de energia de cada.

**B) Quais as diferenças dessa classe com a ResidentialClient?**

##### R. A diferença é que as classes tem tres pontos diferentes pois a CommercialClient esta pegando o cnpj que era privado e deixando publico com o metodo, e a classe ResidentialClient esta pegando o cpf com as mesma funcionalidades de private  e residentsQuantity da classe ResidentialClient com a floorsQuantity da classe CommercialClient.

### Ecercicio 6

**A) De qual classe a IndustrialClient deve ser filha? Por quê?**

##### R. Ela é filha da Industry pois tem as mesmas propriedades do pai que é o cep e machinesQuantity. A classe filha esta usando a propriedade machinesQuantity para ser public e esta  calculando com o calculateBill que é da interface Cliente.

**B) Que interface a IndustrialClient implementa? Por quê?**

##### R. Esta implementando insdustryNumber que é privada e usando o metodo getIndustryNumber como public para mostar.

**C) Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?**

##### R. Para pegar so as informações de outras classes pais que são privadas e mudar para public, mas os settes seria para modificar ou acrescentar mais informações.