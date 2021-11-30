import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

// Exercicios com Users Usuarios

const getUserAll = async() => {
  const result = await connection("User")
    return result
}
app.get("/user/all", async(req: Request, res: Response) =>{
  let errorCode: number = 400
    try{

      const use = await getUserAll()
      if(!use){
        errorCode = 404
        throw new Error("User not found!")
      }
      res.status(200).send(use)
    }catch(error: any){
      res.status(500).send(error.sqlMessage || error.message)
    }
})

const postUser = async (id: string, name: string, nickname: string, email: string)=>{
  await connection.insert({
    id: id,
    name: name,
    nickname: nickname,
    email:email
  }).into("User")
}

app.post("/user", async (req: Request, res: Response): Promise<void> =>{
  let errorCode: number = 400
  try { 
    await postUser(
      req.body.id,
      req.body.name,
      req.body.nickname,
      req.body.email
    )
    const {id, name, nickname, email} = req.body

    if (!id || !name || !email || !nickname) {
      errorCode = 422;
      throw new Error("Por favor check todos os campos!");
    }
    if(!email.includes("@") || !email.includes(".com")){
      errorCode = 406;
      throw new Error(`The email field must contain an "@" and a ".com"`);
    }

     res.status(200).send("User Create Success!")
  } catch (error:any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
})

const getUserById = async(id: string): Promise<any> =>{
  const result = await connection.raw(`
  SELECT id, nickname FROM User WHERE id = "${id}"`)

  return result[0]
}

app.get("/user/:id", async(req: Request, res: Response) =>{
  let errorCode: number = 400
  try {

    const {id} = req.params

    if(!id){
      errorCode = 404
      throw new Error("User not found!")
    }

    const user = await getUserById(id)

    res.status(200).send(user)
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }

})

const updateUser = async(id: string, name: string, nickname: string): Promise<any> =>{
     await connection("User").update({
      name: name,
      nickname: nickname
     }).where("id", id)
   }
app.put("/user/edit/:id", async(req: Request, res: Response) =>{
  let errorCode: number = 400
  try {
    await updateUser(
      req.params.id,
      req.body.name,
      req.body.nickname,
    )
    const {name, nickname} =  req.body

    if (!name || !nickname) {
      errorCode = 422;
      throw new Error("Please check all fields!");
    }
    res.status(200).send("User updated successfully!")
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }

})

const getUsersQuery = async(query: string): Promise <any> =>{
  const result = await connection.raw(`
  SELECT id, nickname FROM User WHERE nickname = "${query}"`)
  return result[0]
}

app.get("/user", async(req: Request, res: Response) =>{
  let errorCode: number = 400
  try {
    const result = await getUsersQuery(req.query.query as string)
      if(!result){
        errorCode = 404
      throw new Error("Please check all fields!")
      }

      res.status(200).send(result)
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
})

// Exercicios com Task - Tarefas

app.post("/task", async (req: Request, res: Response) => {
let codeError: number = 400
try {
    const id = Date.now().toString()
    let { title, description, limit_date, creator_user_id } = req.body

    if (!title || !description || !limit_date || !creator_user_id) {
        codeError = 422 //unprocessable entity
        throw new Error(`Please, complete the fields "title", "description", "limitDate" and "creator_user_id"...`)
    }

    const formatDefaultDate = (data: any) => {
        let arrayDate = data && data.split("/")
        let [year, month, day] = [arrayDate && arrayDate[2], arrayDate && arrayDate[1], arrayDate && arrayDate[0]]
        let usefullDate = `${year}-${month}-${day}`
        return usefullDate
    }
    formatDefaultDate(limit_date)

    const formatDate = (): any => {
        const todayDate = new Date().toISOString();
        let nwd = todayDate && todayDate.split("-");
        let [year, month, newdt] = [nwd && nwd[0], nwd && nwd[1], nwd && nwd[2].split("T")];
        let [day, newHour] = [newdt && newdt[0], newdt && newdt[1].split(".")];
        let moment = newHour && newHour[0];
        let time: any = moment && moment.split(":");
        let hour = time && time[0] - 3;
        if (hour < 0) { hour = hour + 3 }
        let currentData: string = `${year}-${month}-${day}`;
        return (currentData)
    };
    const date = formatDate()
    limit_date = formatDefaultDate(limit_date)

    if (formatDefaultDate(limit_date).valueOf() < date.valueOf()) {
        codeError = 422 //unprocessable entity
        throw new Error(`A deadline must be later than the current date.`)
    }

    await connection("TodoListTask").insert({ id, title, description, limit_date, creator_user_id })
    res.status(200).send("Task created successfully")

} catch (error: any) {
    res.status(codeError).send(error.sqlMessage || error.message)
}
})

function currentData(currentData: any) {
throw new Error("Function not implemented.");
}


app.get("/task/:taskId", async(req: Request, res: Response) =>{
  let codeError: number = 400
  try {
      let taskId = (req.params.taskId).toString()
      const result = await connection.raw(`
      SELECT TodoListTask.id as "TaskId", TodoListTask.title, TodoListTask.description, TodoListTask.status,
      TodoListTask.limit_date, TodoListUser.id as "CreaterUserId", TodoListUser.nickname as "creatorUserNickname"
      FROM TodoListTask
      JOIN TodoListUser
      ON TodoListUser.id = TodoListTask.creator_user_id
      WHERE TodoListTask.id = "${taskId}"
      `)

      if (!result) {
          codeError = 404
          throw new Error(`Deu erro`)
      }
      res.status(200).send(result[0][0])

  } catch (error: any) {
      res.status(codeError).send(error.sqlMessage || error.message)
  }
})

const getTaskCreatorById = async(creatorUserId: string): Promise<any> =>{
  const result = await connection.raw(`
    SELECT * FROM Task WHERE creatorUserId = "${creatorUserId}"`)
    return result[0]
}

app.get("/task", async(req: Request, res: Response) =>{
  let errorCode: number = 400
    try {
      const result = await getTaskCreatorById(req.query.creatorUserId as string)
      if(!result){
        errorCode = 404
      throw new Error("Please check all fields!")
      }

      res.status(200).send(result)
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message)
    }
})

const postTaskResponsible = async(taskId: string, task_id: string, responsible_user_id: string)=>{
await connection.insert({
  taskId: taskId,
  task_id: task_id,
  responsible_user_id: responsible_user_id
}).into("Task")
}
app.post("/task/:responsible", async(req: Request, res: Response) =>{
  let errorCode: number = 400
  try { await postTaskResponsible(
    req.body.task_id,
    req.body.responsible_user_id,
    req.body.taskId)

    const { task_id, responsible_user_id, taskId} =  req.body

    if (!taskId || !task_id || !responsible_user_id) {
      errorCode = 401;
      throw new Error("Please check all fields!");
    }
    
    res.status(200).send("responsible_user_id Successfully done")
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
})

const server = app.listen(process.env.PORT || 3306, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});