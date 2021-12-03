import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {getUserAll} from "./endpoint/Users/getUserAll"
import {getUserById} from "./endpoint/Users/getUserById"
import { getUsersQuery } from "./endpoint/Users/getUsersQuery"
import { postUser } from "./endpoint/Users/postUser"
import {updateUser} from "./endpoint/Users/updateUser"
import { postTask } from "./endpoint/Task/postTask"
import { getTaskById } from "./endpoint/Task/getTaskById";
import {getTaskCreatorById} from "./endpoint/Task/getTaskCreatorById"
import { postTaskResponsible } from "./endpoint/Task/postTaskResponsible";

const app = express();

app.use(express.json());
app.use(cors());

// Endpoints de Usuarios
app.get("/user/all", getUserAll)
app.get("/user/:id", getUserById)
app.get("/user", getUsersQuery)
app.post("/user", postUser)
app.put("/user/edit/:id", updateUser)

// Exercicios com Task - Tarefas
app.get("/task/:taskId", getTaskById)
app.get("/task", getTaskCreatorById)
app.post("/task/:responsible", postTaskResponsible)
app.post("/task", postTask)


const server = app.listen(process.env.PORT || 3306, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});