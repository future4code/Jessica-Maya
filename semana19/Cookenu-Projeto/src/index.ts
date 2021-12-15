import {app} from "./app"
import { signup } from "./endpoints/signup"
import dotenv from "dotenv"
import { login } from "./endpoints/login"
import { perfilUser } from "./endpoints/perfilUser"
import { perfilUserId } from "./endpoints/perfilUserId"

dotenv.config()

app.get("/cookenu/user", perfilUser)
app.get("/cookenu/user/:id", perfilUserId)
app.post("/cookenu/signup", signup)
app.post("/cookenu/login", login)
