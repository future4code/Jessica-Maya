### Exercicio 1

**A) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?**

##### R. round é parâmetro que define o tempo para execução do algoritmo usei 12 . E Salt são strings aleatória para gerar hashs diferentes mesmo quando as senhas são iguais.

### Exercicio 2

**A) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.**

##### R. O Signup pois quando o usuario cadastrar sua senha ela ja vem com o bcryptjs criado e com a senha segura. Pois se fizer depois o usuario teria que atualizar a senha depois e sua senha ficaria sem seguranda.

**D) No exercício de ontem, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.**

##### R. Não pois ele so pega as informações.