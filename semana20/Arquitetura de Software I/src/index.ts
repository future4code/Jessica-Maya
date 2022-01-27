import { app } from "./app"
import { deleteUserIdController } from "./controllers/deleteUserIdController"
import { getUserAllController } from "./controllers/getUserAllController"
import { loginController } from "./controllers/loginController"
import {signupController} from "./controllers/signUpController"


app.post("/user/signup", signupController)
app.post('/user/login', loginController)
app.get("/user/all", getUserAllController)
app.delete("/user/:id", deleteUserIdController)