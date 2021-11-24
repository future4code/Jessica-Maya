### Exercicio 1

**a) Explique como é a resposta que temos quando usamos o raw.**

**b) Faça uma função que busque um ator pelo nome**

```sql
const getAllActors = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"`)
    return result[0]
  }

app.get("/users/:name", async(req: Request, res: Response) =>{

    try {
        const name = req.params.name
        const result = await getAllActors(name)
        res.status(200).send(result)

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
```

**c) Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.**

```sql
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}" GROUP BY gender
    `);
        const count = result[0]
        return count
  };

app.get("/users/:gender", async(req: Request, res: Response) =>{
    try {
        const gender = req.params.gender
        const result = await countActors(gender)
        res.status(200).send(result)

        } catch (error: any) {
                res.status(500).send(error.sqlMessage || error.message)
    }
});
```

### Exercicio 2 

**a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão**

```sql
const updateActor = async(id: string, salary: number): Promise<any> =>{
    await connection("Actor").update({
        salary: salary
    }).where("id", id)
}

app.put("/users/:id", async(req: Request, res: Response) => {
    try {
        const id = req.params.id
        const salary = req.body.salary

        const result = await updateActor(id, salary)
  
      res.status(200).send("Ator foi atualizado!");
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
})
```

**b. Uma função que receba um id e delete um ator da tabela**
```sql
app.delete("/users/:id", async(req: Request, res: Response) =>{
    try {
        const id = req.params.id

        const result = await deleteActor(id)
        res.status(200).send("Ator deletado com sucesso!");
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
```

**c. Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`**
```sql
const avgSalary = async (gender: string): Promise <any> =>{
    const result = await connection("Actor")
    .avg("salary as average")
    .where({gender})
    return result[0];
}

app.get("/users/actors/:gender", async(req: Request, res: Response) =>{
    try {
        const gender = req.params.gender
        const result = await avgSalary(gender)
        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
```

### Exercicio 3

**a) Crie um endpoint com as especificações acima**
```sql
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
    return result[0]
}
app.get("/actor/:id", async (req:Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);
    
        res.status(200).send(actor)
      } catch (error: any) {
        res.status(400).send({
          message: error.message,
        });
      }
    });
```

**b) Crie um endpoint agora com as seguintes especificações**

- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero

```sql
  const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}" GROUP BY gender
    `);
        const count = result[0]
        return count
  };

app.get("/actor", async(req: Request, res: Response) =>{
    try {
        const count = await countActors(req.query.gender as string)
        res.status(200).send({
            quantidade: count
        })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
          });
    }
})
```

### Exercicio 4

**a)**
    **- Deve ser um PUT (`/actor`)**
    **- Receber o salário e o id pelo body**
    **- Simplesmente atualizar o salário do ator com id em questão**
```sql
const updateSalary = async(id: string, salary: number): Promise<any> =>{
    await connection("Actor").update({
        salary: salary
    }).where("id", id)
}


app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.salary, req.body.id);
    res.status(200).send({
      message: "Success",
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});
```

**b)**
    **- Deve ser um DELETE (`/actor/:id`)**
    **- Receber id do ator como *path param**
    **- Simplesmente deletar o ator da tabela**
```sql
const deleteActor = async(id: string): Promise<void> =>{
     await connection("Actor")
     .delete()
     .where("id", id)
}

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id)
    } catch (error: any) {
      res.status(400).send({
        message: error.message
      })
    }
  });
```

### Exercicio 5

**- Deve ser um POST (`/movie`)**
**- Receber todas as informações pelo body**
**- Criar o filme na tabela**
```sql
const createMovie = async(
    id: string,
    title: string,
    synopsis:string,
    releaseDate: Date,
    playingLimitDate: Date) =>{
        await connection.insert({
     id: id,
    title: title,
    synopsis: synopsis,
    release_date: releaseDate,
    playing_limit_date: playingLimitDate,
        }).into("Movie")
    }

    app.post("/movie", async(req:Request, res: Response) =>{
        try {
            await createMovie(
                req.body.id,
                req.body.title,
                req.body.synopsis,
                req.body.releaseDate,
                req.body.playingLimitDate
            )
            res.status(200).send({
            message: "Success"
            })
        } catch (error: any) {
            res.status(400).send({
                message: error.message,
              })
        }
    })

```
### Exercicio 6

**- Deve ser um GET (`/movie/all`)**
**- Não recebe nada**
**- Retorna todos os filmes. Ele deve retornar, no máximo, uma lista com 15 itens**

```sql
const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie LIMIT 15
  `);

  return result[0];
};

app.get("/movie/all", async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies();

    res.status(200).send({
      movies: movies,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});
```

### Exercicio 7

**- Deve ser um GET (`/movie/search`)**
**- Deve receber o termo de busca como uma query string (`/movie/search?query=`)**
**- Faz a busca entre todos os filmes que tenham o termo de busca no nome ou na sinopse. Além disso, a lista deve vir ordenada pela data de lançamento**
```sql

```