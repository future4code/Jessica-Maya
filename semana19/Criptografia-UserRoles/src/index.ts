import {app} from "./app"
import  login  from "./endpoints/login"
import createUsers from "./endpoints/createUser"
import getUserId from "./endpoints/getUserId"

app.post("/user/signup", createUsers)
app.post("/user/login", login)
app.get("/user/profile", getUserId)


