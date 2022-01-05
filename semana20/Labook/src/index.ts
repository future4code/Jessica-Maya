import { app } from "./controller/app"
import { createPostController } from "./controller/createPostController"
import { loginController } from "./controller/loginController"
import { postByIdController } from "./controller/postByIdController"
import { signupController } from "./controller/signupController"


app.post("/labook/signup", signupController)
app.post("/labook/login", loginController)
app.post("/labook/post", createPostController)
app.get("/labook/post/:id", postByIdController)