### Exercicio 1

**a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.**

R. 
**VARCHAR(255)** ele é uma sequência de caracteres, um comprimento de uma variável.
**PRIMARY KEY** é uma combinação de valores em caso de mais de uma chave primária, nunca se repetem na mesma tabela e é usado como Id.
**NOT NULL** garante que uma coluna não admite valores NULL. Isto significa que será abortada uma operação de INSERT ou UPDATE que coloque um valor NULL nessa coluna. A sua utilização é útil sempre que as regras de negócio obriguem ao preenchimento de um campo.
**DATE** ele declara uma data que pode ser em formatos // ou com horas tambem como datetime.

**b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.**

R.
```sql
SHOW DATABASES
```
Mostra as informações dos schema

Database
---------------------
inforation_schema
maryam-jessica-bento

```sql 
SHOW TABLES
```
Mostra as Tabelas do schema

Tables_in_maryam-jessica-bento
---------------------
Actor
professores_labenu

**c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.**

```sql
DESCRIBE Actor;
```

R.
Descreve todos os dados da criação da tabela todos os dados e valores junto com o type


Field     | Type        | Null | Key | Default | Extra |
----------|-------------|------|-----|---------|-------|
id        |varchar(255) | NO   | PRI | NULL    |       |
name      | varchar(255)| NO   |     | NULL    |       |
salary    | float       | NO   |     | NULL    |       |
birth_date| date        | NO   |     | NULL    |       |
gender    | varchar(6)  | NO   |     | NULL    |       |

### Exercicio 2

**a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963**

```sql
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
"002",
"Gloria Pires",
1200000,
"1963-08-23",
"female"
);
```

Id        | Name        | Salary | birth_date | gender |
----------|-------------|--------|------------|--------|
002       | Gloria Pires| 1200000| 1963-08-23 | female |

**b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.**

```sql
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
"002",
"Gloria Maria",
500000,
"1923-06-22",
"female"
);
```

R.
	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
    Traduzindo quer dizer que ja existe informações com essa primary key e que não de ser 
    duplicada.

**Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta**

R. c) Error Code: 1136. Column count doesn't match value count at row 1
A contagem de colunas não corresponde à contagem de valores na linha 1

R. d) Error Code: 1364. Field 'name' doesn't have a default value
O campo 'nome' não tem um valor padrão	

R. e)Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

### Exercicio 3

**a) Escreva uma query que retorne todas as informações das atrizes**

```sql
SELECT * from Actor WHERE gender = "female"
```

 Id       | Name                  | Salary | birth_date | gender |
----------|-----------------------|--------|------------|--------|
002       | Gloria Pires          |1200000 | 1963-08-23 | female |
003       | Fernanda Montenegro   | 300000 | 1929-10-19 | female |
005       | Juliana Paes          | 300000 | 1979-03-26 | female |

**b) Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`**

```sql
 SELECT salary from Actor WHERE name = "Tony Ramos"
 ```

 R. Salary |
-----------|
  400000


**c) Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.**

```sql
 SELECT *  WHERE gender = "invalid"
 ```
R. invalid"	Error Code: 1096. No tables used
Nenhuma mesa usada	

**d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000**

```sql 
SELECT id,name, salary from Actor WHERE salary < 500000;
```

Id        | Name               | Salary |
----------|--------------------|--------|
001       | Tony Ramos         | 400000 |
003       | Fernanda Montenegro| 300000 |
004       | Antônio Fagundes   | 400000 |

**e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta**

```sql
SELECT id, name from Actor WHERE id = "002";
```
R.	Error Code: 1054. Unknown column 'nome' in 'field list'	
Coluna desconhecida 'nome' na 'lista de campos'

Não é nome e sim name na tabela!

### Exercicio 4

```sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```

**a) Explique com as suas palavras a query acima**

Id        | Name             | Salary | birth_date | gender |
----------|------------------|--------|------------|--------|
004       | Antônio Fagundes | 400000 | 1949-04-18 |   male |
005       | Juliana Paes     | 719333 | 1979-03-26 | female |

**b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00**

```sql
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

Id        | Name             | Salary | birth_date | gender |
----------|------------------|--------|------------|--------|
001       | Tony Ramos       | 400000 | 1948-08-25 |   male |
002       | Gloria Pires     | 1200000| 1963-08-23 | female |
005       | Juliana Paes     | 719333 | 1979-03-26 | female |

**c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.**

```sql
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```
Id        | Name                | Salary | birth_date | gender |
----------|---------------------|--------|------------|--------|
002       | Gloria Pires        | 1200000| 1963-08-23 | female |
003       | Fernanda Montenegro | 300000 | 1929-10-19 | female |
004       | Antônio Fagundes    | 400000 | 1979-03-26 | male   |

**d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00**

```sql
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;
```
Id        | Name                | Salary | birth_date | gender |
----------|---------------------|--------|------------|--------|
001       | Tony Ramos          | 400000 | 1948-08-25 | male   |
004       | Antônio Fagundes    | 400000 | 1979-03-26 | male   |
005       | Juliana Paes        | 719333 | 1979-03-26 | female |

#### Exercicio 5

**a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.**

```sql
INSERT INTO Filme(id, nome, sinopse, data_de_lançamento, avaliação)
VALUES(
"004",
"O Auto da Compadecida",
"As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver.",
"2000-08-10",
10
);
```

#### Exercicio 6

**a) Retorne o id, título e avaliação a partir de um id específico**

```sql
SELECT id, title, rating FROM Movie WHERE id="004"
```

Id        |Title                 | Rating |
----------|----------------------|--------|
004       | O Auto da Compadecida|  10    |

**b) Retorne um filme a partir de um nome específico**

```sql
SELECT * FROM Movie WHERE title= "Dona Flor e Seus Dois Maridos";
```

Id        |Title                          | Synopsis    | Release_Date        | Rating |
----------|-------------------------------|-------------|---------------------|--------|
003       | Dona Flor e Seus Dois Maridos | Dona Flor...| 2017-11-02          | 8      |

**c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`**

```sql
SELECT id, title, synopsis FROM Movie WHERE rating > 7
```
Id        |Title                          | Synopsis         |
----------|-------------------------------|------------------|
002       | Doce de mãe                   | Dona Picucha...  |
003       | Dona Flor e Seus Dois Maridos | Dona Flor...     |
003       | O Auto da Compadecida         | As aventuras de..| 


#### Exercicio 7

**a) Retorna um filme cujo título contenha a palavra vida**

```sql
SELECT * FROM Movie
WHERE title LIKE "%vida%";
```

Id        |Title | Synopsis| Release_Date| Rating |
----------|------|---------|-------------|--------|
null      | null | null    | null        | null   |

**b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.**

```sql
SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%";
```
Id        |Title | Synopsis| Release_Date| Rating |
----------|------|---------|-------------|--------|
null      | null | null    | null        | null   |

**c) Procure por todos os filmes que já tenham lançado**

```sql
SELECT * FROM Movie
WHERE release_date < "2020-05-04";
```
Id        |Title                          | Synopsis        | Release_Date | Rating |
----------|-------------------------------|-----------------|--------------|--------|
001       | Se Eu Fosse Você              | Cláudio e Helena| 2006-06-01   | 7      |
002       | Doce de mãe                   | Dona Picucha... | 2012-12-27   | 10     |
003       | Dona Flor e Seus Dois Maridos | Dona Flor...    | 2017-11-02   | 8      |
004       | O Auto da Compadecida         | As aventuras... | 2000-08-10   | 10     |


**d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7.**

```sql
SELECT * FROM MOVIE
WHERE release_date < "2020-05-04" AND (title LIKE "%TERMO DE BUSCA%" OR 
synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;
```
Id        |Title | Synopsis| Release_Date| Rating |
----------|------|---------|-------------|--------|
null      | null | null    | null        | null   |