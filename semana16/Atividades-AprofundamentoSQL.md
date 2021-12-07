#### Exercicio 1

**Resposta da letra a**

```sql
ALTER TABLE Actor DROP COLUMN salary;
```
R. O ALTER TABLE é usada para adicionar, excluir ou modificar colunas em uma tabela existente e o DROP COLUMN excluir uma coluna em uma tabela.

**Resposta da letra b**

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
R. O ALTER TABLE é usada para adicionar, excluir ou modificar colunas em uma tabela existente e o CHANGE alteração do nome da coluna. Para utilizá-lo, é necessário especificar o nome atual da coluna e depois o nome que deseja renomear e a modificação do VARCHAR.

**Resposta da letra c**

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
R. O ALTER TABLE é usada para adicionar, excluir ou modificar colunas em uma tabela existente e o CHANGE alteração do nome da coluna. Para utilizá-lo, se não deseje alterar o nome, basta colocar novamente o mesmo nome, para ele permanecer com o nome e a modificação do VARCHAR.

**Resposta da letra d**
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

#### Exercicio 2 

**a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003**
```sql
UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "2020-02-10"
WHERE id = "003";
```

ID  | NAME        | SALARY | BIRTH_DATE | GENDER | HOMETWON | DESSERT |
----|-------------|--------|------------|--------|----------|---------|
003 |Moacyr Franco|300000  |2020-02-10  |female  |Ituiutaba |sorvete  |

**b) Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.**
```sql
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005"
```
ID  | NAME        |
----|-------------|
005 |JULIANA PAES |
005 |Juliana Paes |

***c) Escreva uma query que atualize todas as informações do ator com o id `005`***
```sql
UPDATE Actor
SET name = "Moacyr Franco",
  salary = 600000,
  birth_date = "2020-02-10",
  gender = "male"
  WHERE id = "003";
```
ID  | NAME        | SALARY | BIRTH_DATE | GENDER | HOMETWON | DESSERT |
----|-------------|--------|------------|--------|----------|---------|
003 |Moacyr Franco|600000  |2020-02-10  |male    |Ituiutaba |sorvete  |

**d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.**
```sql
UPDATE Actor
 SET age = 25
   WHERE id = "005"
```

R.Error Code: 1054. Unknown column 'age' in 'field list'	

#### Exercicio 3

**a) Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`**
```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```
ID  | NAME           | SALARY | BIRTH_DATE | GENDER | HOMETWON       | DESSERT |
----|----------------|--------|------------|--------|----------------|---------|
001 |Tony Ramos      |400000  |1948-08-25  |male    |Ituiutaba       |sorvete  |
002 |Gloria Pires    |1200000 |1963-08-23  |female  |Pindamonhangaba |sorvete  |
003 |Juliana Paes    |719333  |1979-03-26  |female  |Ituiutaba       |sorvete  |
004 |Antônio Fagundes|400000  |1949-04-18  |male    |Pindamonhangaba |sorvete  |
005 |Moacyr Franco   |600000  |2020-02-10  |male    |Ituiutaba       |sorvete  |
006 |Lázaro Ramos    |500000  |1978-11-01  |male    |Salvador        |sorvete  |

**b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00**
```sql
DELETE FROM Actor 
WHERE gender = "male"
AND 
salary > 1000000;
```

R. Sucesso, mais não apagou porque não tem ator male que ganhe mais 1000000.
0 row(s) affected	

#### Exercicio 4 

**a) Escreva uma query que pegue o maior salário de todos os atores e atrizes**
```sql
SELECT MIN(salary) FROM Actor;
```
MAX(salary) |
------------|
1200000

**b) Escreva uma query que pegue o menor salário das atrizes**
```sql
SELECT MIN(salary) FROM Actor
WHERE gender = "female";
```
MIN(salary) |
------------|
719333

**c) Escreva uma query que pegue a quantidade de atrizes**
```sql
SELECT COUNT(*) FROM Actor
WHERE gender = "female";
```
COUNT(*) |
---------|
3

**d. Escreva uma query que pegue a soma de todos os salários**
```sql
SELECT SUM(salary) from Actor;
```
SUM(salary) |
------------|
3819333

#### Exercicio 5

**a) Releia a última query. Teste-a. Explique o resultado com as suas palavras**
```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```
R. Nessa query ele selecionou todos os gender da tabela Actor e depois separou em grupo o que era famale foi somado quantos que foi 2 e somou os male que foi 4.

COUNT(*) | GENDER |
---------|--------|
4        |male    |
2        |female  |

**b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética**
```sql
SELECT id,name
FROM Actor
ORDER BY name DESC;
```
ID  | NAME           |
----|----------------|
001 |Tony Ramos      |
005	|Moacyr Franco   |
006	|Lázaro Ramos    |
003	|Juliana Paes    |
002	|Gloria Pires    |
004	|Antônio Fagundes|

**c) Faça uma query que retorne todos os atores ordenados pelo salário**
```sql
SELECT * FROM Actor
ORDER BY salary ASC;
```
ID  | NAME           | SALARY | BIRTH_DATE | GENDER | HOMETWON       | DESSERT |
----|----------------|--------|------------|--------|----------------|---------|
001 |Tony Ramos      |400000  |1948-08-25  |male    |Ituiutaba       |sorvete  |
004 |Antônio Fagundes|400000  |1949-04-18  |male    |Pindamonhangaba |sorvete  |
006 |Lázaro Ramos    |500000  |1978-11-01  |male    |Salvador        |sorvete  |
005 |Moacyr Franco   |600000  |2020-02-10  |male    |Ituiutaba       |sorvete  |
003 |Juliana Paes    |719333  |1979-03-26  |female  |Ituiutaba       |sorvete  |
002 |Gloria Pires    |1200000 |1963-08-23  |female  |Pindamonhangaba |sorvete  |

**d) Faça uma query que retorne os atores com os três maiores salarios**
```sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
ID  | NAME           | SALARY | BIRTH_DATE | GENDER | HOMETWON       | DESSERT |
----|----------------|--------|------------|--------|----------------|---------|
002 |Gloria Pires    |1200000 |1963-08-23  |female  |Pindamonhangaba |sorvete  |
003 |Juliana Paes    |719333  |1979-03-26  |female  |Ituiutaba       |sorvete  |
005 |Moacyr Franco   |600000  |2020-02-10  |male    |Ituiutaba       |sorvete  |

**e) Faça uma query que retorne a média de salário por gênero**
```sql
SELECT AVG(salary), gender 
FROM Actor
GROUP BY gender;
```
AVG(salary) | GENDER |
------------|--------|
475000      |male    |
959666.5    |female  |

#### Exercicio 6

**a) Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema.**
```sql
ALTER TABLE Movie ADD playing_limit_date DATE;
```
ID | TITLE                        | SYNOPSE                   | RELEASE_DATE | RATING | PLAYING_LIMIT_DATE|
---|------------------------------|---------------------------|--------------|--------|-------------------|
001| Se Eu Fosse Você             |Cláudio e Helena..         |	2006-06-01	 |  7	  |                   |
002| Doce de mãe	              |Dona Picucha, uma animada..| 2012-12-27	 |  10	  |                   |
003| Dona Flor e Seus Dois Maridos|Dona Flor é uma sedutora...|	2017-11-02   |	8	  |                   |  
004	O Auto da Compadecida         |As aventuras de dois nord..|	2000-08-10   | 	10	  |                   |

**b) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.**
```sql
ALTER TABLE Movie CHANGE rating rating FLOAT;
```
R. A tabela foi alterada para que o rating possa usar numeros não inteiros.

**c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído.**
```sql
UPDATE Movie 
SET playing_limit_date = "2021-11-30"
WHERE id = "003" OR id ="001";

UPDATE Movie 
SET playing_limit_date = "2021-10-01"
WHERE id = "001";
```
ID | TITLE                        | SYNOPSE                   | RELEASE_DATE | RATING | PLAYING_LIMIT_DATE|
---|------------------------------|---------------------------|--------------|--------|-------------------|
001| Se Eu Fosse Você             |Cláudio e Helena..         |	2006-06-01	 |  7	  |    2021-10-01     |
002| Doce de mãe	              |Dona Picucha, uma animada..| 2012-12-27	 |  10	  |    2021-10-01     |
003| Dona Flor e Seus Dois Maridos|Dona Flor é uma sedutora...|	2017-11-02   |	8	  |                   |  
004	O Auto da Compadecida         |As aventuras de dois nord..|	2000-08-10   | 	10	  |    2021-11-30     |


**d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.**
```sql
UPDATE Movie 
SET synopsis = "Casal divertido e bagunçado!"
WHERE id = "001";
```
R. Não ocorreu nenhum erro mais não atualizou nada.
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	

#### Exercicio 7

**a) Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?**
```sql
SELECT COUNT(*) FROM Movie
WHERE rating > 7.5;
```
COUNT(*) |
---------|
3        |

**b) Qual a média das avaliações dos filmes?**
```sql
SELECT AVG(rating) FROM Movie;
```
AVG(rating)      |
-----------------|
9.333333333333334|

**c) Qual a quantidade de filmes em cartaz?**
```sql
SELECT COUNT(*) FROM Movie
WHERE playing_limit_date > CURDATE();
```
COUNT(*) |
---------|
2        |

**d) Qual a quantidade de filmes que ainda irão lançar?**
```sql
SELECT COUNT(*) FROM Movie
WHERE release_date > CURDATE();
```
COUNT(*) |
---------|
0        |

**e. Qual a maior nota dos filmes?**
```sql
SELECT MAX(rating) FROM Movie;
```
MAX(rating)|
-----------|
10         |

**f. Qual a menor nota dos filmes?**
```sql
SELECT MIN(rating) FROM Movie;
```
MIN(rating)|
-----------|
8          |

#### Exercicio 8

**a. Retorne todos os filmes em ordem alfabética**
```sql
SELECT * FROM Movie
ORDER BY title;
```
ID | TITLE                        | SYNOPSE                   | RELEASE_DATE | RATING | PLAYING_LIMIT_DATE|
---|------------------------------|---------------------------|--------------|--------|-------------------|
002| Doce de mãe	              |Dona Picucha, uma animada..| 2012-12-27	 |  10	  |    2021-10-01     |
003| Dona Flor e Seus Dois Maridos|Dona Flor é uma sedutora...|	2017-11-02   |	8	  |                   |  
004	O Auto da Compadecida         |As aventuras de dois nord..|	2000-08-10   | 	10	  |    2021-11-30     |


**b. Retorne os 5 primerios filmes em ordem descrente alfabética**
```sql
SELECT * FROM Movie
ORDER BY title DESC
LIMIT 5;
```
ID | TITLE                        | SYNOPSE                   | RELEASE_DATE | RATING | PLAYING_LIMIT_DATE|
---|------------------------------|---------------------------|--------------|--------|-------------------|
004	O Auto da Compadecida         |As aventuras de dois nord..|	2000-08-10   | 	10	  |    2021-11-30     |
003| Dona Flor e Seus Dois Maridos|Dona Flor é uma sedutora...|	2017-11-02   |	8	  |                   |
002| Doce de mãe	              |Dona Picucha, uma animada..| 2012-12-27	 |  10	  |    2021-10-01     |  

**c. Retorne os 3 filmes mais recentes em cartaz**
```sql
SELECT * FROM Movie
WHERE release_Date < CURDATE()
LIMIT 3
```
ID | TITLE                        | SYNOPSE                   | RELEASE_DATE | RATING | PLAYING_LIMIT_DATE|
---|------------------------------|---------------------------|--------------|--------|-------------------|
002| Doce de mãe	              |Dona Picucha, uma animada..| 2012-12-27	 |  10	  |     2021-10-01    |
003| Dona Flor e Seus Dois Maridos|Dona Flor é uma sedutora...|	2017-11-02   |	8	  |                   |  
004	O Auto da Compadecida         |As aventuras de dois nord..|	2000-08-10   | 	10	  |     2021-11-30    |

**d. Retorne os 3 filmes melhor avalidos**
```sql
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;
```
ID | TITLE                        | SYNOPSE                   | RELEASE_DATE | RATING | PLAYING_LIMIT_DATE|
---|------------------------------|---------------------------|--------------|--------|-------------------|
002| Doce de mãe	              |Dona Picucha, uma animada..| 2012-12-27	 |  10	  |    2021-10-01     |
004	O Auto da Compadecida         |As aventuras de dois nord..|	2000-08-10   | 	10	  |    2021-11-30     |
003| Dona Flor e Seus Dois Maridos|Dona Flor é uma sedutora...|	2017-11-02   |	8	  |                   |  