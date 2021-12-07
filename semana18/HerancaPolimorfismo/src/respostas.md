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

##### R. usar metodos e settes para usar instancias.