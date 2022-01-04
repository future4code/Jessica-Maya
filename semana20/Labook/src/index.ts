import { app } from "./controller/app"
import { signupController } from "./controller/signupController"

app.post("/labook/signup", signupController)