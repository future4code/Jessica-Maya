import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net"
import { UserInfo } from "os";

const app = express();

app.use(express.json());
app.use(cors());

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

type User = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}


let users =[
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]


app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400

    try{
        if (!users) {
            errorCode = 404;
            throw new Error("User not found");
        }
        res.send(users)

    } catch(error: any) {
        res.status(errorCode).send({message: error.message})
    }
})

app.get("/users/username", (req: Request, res: Response) => {
    let errorCode: number = 400

    try{
        const name: string = req.query.name as string
        const user: User | undefined = users.find((user) => user.name === name);

        if (!user) {
        errorCode = 404;
        throw new Error("User not found");
    }
    res.status(200).send(user);
    
    }catch(error: any){
        res.status(errorCode).send({error: error.message})
    }
})

app.get("/users/:type", (req: Request, res: Response) => {
    let errorCode: number = 400

    try{
        let type: string = req.params.type.toUpperCase() as string
       
            if(type in UserType){
                 let user :User[] = users.filter((user) => user.type === type)
                res.status(200).send(user)
            }else {
                res.status(errorCode).send("Type not exists.")
            }
    
    }catch(error: any){
        res.status(errorCode).send({error: error.message})
    }
})

app.post("/users/create", (req: Request, res: Response) => {
    let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Por favor check todos os campos!");
    }

    const newUser: User = {
      id, name, email, type, age
    };

    users.push(newUser);

    res.status(201).send({ message: "Usuario Criado com sucesso!" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
})

const server = app.listen(process.env.Port || 3003, () =>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Servidor aberto na porta http://localhost:${address.port}`)
    } else {
        console.error(" Falha na porta, tente novamente!")
    }
})