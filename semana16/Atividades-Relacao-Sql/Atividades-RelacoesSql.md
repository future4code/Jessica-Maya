### Exercicio 1

**a) Explique o que é uma chave estrangeira**
 R. Chave estrangeira Foreign Key é utilizado para criar os relacionamentos entre as tabelas podendo facilitar as consultas e fazer cruzamento de dados através destas referências, o que poderia gerar uma consulta que iria pegar o nome do produto e o nome da categoria que ele pertence para exibirmos em uma listagem dos dados.

**b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes**
```sql
CREATE TABLE Rating(
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"001",
    "Filme Maravilhoso!",
    8.5,
    "004"
);
```

**c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.**
```sql
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"002",
    "Não assistir mais diz que é otimo!",
    5.0,
    "010"
);
```
R. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha - Falha de adiçao pois Não existe o id do filme.

**d) *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.**
```sql
ALTER TABLE Movie DROP COLUMN rating;
```

**e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.**
```sql
DELETE FROM Movie
WHERE id = "004";
```
R.  Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha. Tipo por favor para apagar esse id delete primeiro a avaliação.

### Exercicio 2

**a) Explique, com as suas palavras, essa tabela**
```sql
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
R. Aqui esta criando uma tabela com elencos de um filme e esta fazendo referências aos filmes e aos atores através de duas chaves estrangeiras.

**b) Crie, ao menos, 6 relações nessa tabela**
```sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "002"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "003"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "004"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "002"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "004"
);

```

**c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query**
```sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"001",
    "008"
);
```
R. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha. Não existe o actor_id Ator(id).

**d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query**
```sql
DELETE FROM Actor
WHERE id= "002";
```
R. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha
Não é possivel pois tenho uma chave filha, apague ela primeiro.

### Exercicio 3

**a. Explique, com suas palavras, a query acima. O que é o operador ON?**
```sql
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```
R. o ON ele deixa a junção certinha para que a visualização fica mais clara. Pois aqui esta juntando informação do Movie.id do Movie e Rating.movie_id do Rating.

**b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.**
```sql
SELECT movi.id as movie_id, rate.rate as rating FROM Movie movi
INNER JOIN Rating rate ON movi.id = rate.movie_id;
```

### Exercicio 4

**a. Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário**
```sql
SELECT movi.id as movie_id, movi.title, rate.rate as rating, rate.comment as rating_comment
FROM Movie movi 
LEFT JOIN Rating rate ON movi.id = rate.movie_id;
```

**b. Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator**
```sql
SELECT movi.id as movie_id, movi.title, moviCas.actor_id 
FROM Movie movi
RIGHT JOIN MovieCast moviCas ON moviCas.movie_id = movi.id;
```
**c. Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)**
```sql
SELECT AVG(rate.rate), movi.id, movi.title
FROM Movie movi 
LEFT JOIN Rating rate ON movi.id = rate.movie_id
GROUP BY (movi.id);
```

### Exercicio 5

**a. Explique, com suas palavras essa query. Por que há a necessidade de dois `JOIN`?**
R. O JOIN é essencial para a manipulação de dados entre tabelas no banco de dados. Os dois ou mais JOIN faz com que apareça mais tabelas e suas junções.

**b. Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque `alias` para facilitar o endentimento do retorno da query**
```sql
SELECT movi.id as movie_id, movi.title, acto.id as actor_id, acto.name 
FROM Movie movi
LEFT JOIN MovieCast moviCas ON movi.id = moviCas.movie_id
JOIN Actor acto ON acto.id = moviCas.actor_id;
```

**c. A query abaixo **deveria** ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.**
```sql
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
R. Coluna desconhecida 'm' na 'lista de campos' pois no m,title deveria ser m.title

**d. *Desafio:* Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)**
```sql
SELECT  movi.title, rate.rate as rating, rate.comment as rating_comment, acto.name as actor_id
FROM Movie movi 
LEFT JOIN Rating rate ON movi.id = rate.movie_id
Join Actor acto ON acto.id = rate.movie_id;
```

### Exercicio 6

**a. Que tipo de relação é essa?**
R.M:N Pois um óscar pode ser dado a vários filmes e um filme também pode ganhar vários óscar.

**b. Explicite a query que você usou para criar a tabela**
```sql
CREATE TABLE Oscar(
	id VARCHAR(255) PRIMARY KEY,
    best_movie TEXT NOT NULL,
    date_won DATE NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

AlTER TABLE Oscar ADD best_director VARCHAR(255);
```
**c. Crie ao menos 2 óscar para cada um dos filmes**
```sql
INSERT INTO Oscar (id, best_movie, date_won, movie_id)
VALUES (
	"001",
    "Melhor Filme do ano 2021",
    "2021-11-25",
    "002"
);
INSERT INTO Oscar (id, best_movie, date_won, movie_id)
VALUES (
	"002",
    "Melhor Filme de Comedia do ano 2021",
    "2021-11-25",
    "002"
);
```
**d. Faça uma query que retorne todos os filmes e seus respectivos óscar**
```sql
SELECT  movi.id, movi.title, best.movie_id, best.best_movie as best_movie
FROM Movie movi 
LEFT JOIN Oscar best ON movi.id = best.id;
```