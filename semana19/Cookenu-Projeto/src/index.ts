import {app} from "./app"
import { signup } from "./endpoints/Users/signup"
import dotenv from "dotenv"
import { login } from "./endpoints/Users/login"
import { perfilUser } from "./endpoints/Users/perfilUser"
import { perfilUserId } from "./endpoints/Users/perfilUserId"
import { createRecipes } from "./endpoints/Recipes/createRecipes"
import { userIdFollow } from "./endpoints/Follow/UserIdFollow"

dotenv.config()

// Endpoints Users

app.get("/cookenu/user", perfilUser)
app.get("/cookenu/user/:id", perfilUserId)
app.post("/cookenu/signup", signup)
app.post("/cookenu/login", login)

// Endpoints Recipes

app.post("/cookenu/recipe", createRecipes)

// Endpoints Follow

app.post("/cookenu/user/follow", userIdFollow)

