import express, {Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

const getAllActors = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"`)

    return result[0]
  }

app.get("/users/:name", async(req: Request, res: Response) =>{
    let erroCode: number = 404
    try {

        const name = req.params.name
        const result = await getAllActors(name)

        if(!result || !name){
            erroCode = 404
            throw new Error("Actor not found")
        }
        res.status(200).send(result)

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

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

const deleteActor = async(id: string): Promise<void> =>{
     await connection("Actor")
     .delete()
     .where("id", id)
}

app.delete("/users/:id", async(req: Request, res: Response) =>{
    try {
        const id = req.params.id

        const result = await deleteActor(id)
        res.status(200).send("Ator deletado com sucesso!");
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

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
    });


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




  const server = app.listen(process.env.PORT || 3306, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });

