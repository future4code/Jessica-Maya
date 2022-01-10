import {app} from "./app"
import dotenv from "dotenv"
import { login } from "./endpoints/Users/login"
import { perfilUser } from "./endpoints/Users/perfilUser"
import { perfilUserId } from "./endpoints/Users/perfilUserId"
import { createRecipes } from "./endpoints/Recipes/createRecipes"
import { userIdFollow } from "./endpoints/Follow/UserIdFollow"
import { getRecipeId } from "./endpoints/Recipes/getRecipeId"
import { userUnFollow } from "./endpoints/Follow/UserUnFollow"
import { getFeedUser } from "./endpoints/Recipes/getFeedUser"
import { signup } from "./endpoints/Users/signup"

dotenv.config()

app.post("/cookenu/signup", signup) // Cadastro Usuario
app.post("/cookenu/login", login) // Login Usuario
app.post("/cookenu/recipe", createRecipes) // Criar Receitas
app.post("/cookenu/user/follow", userIdFollow) // Seguir outro usuario
app.get("/cookenu/recipe/:id", getRecipeId) // Receitas pelo id 
app.get("/cookenu/user/feed", getFeedUser) // Receitas do usuario 
app.get("/cookenu/user", perfilUser) // Proprio Perfil
app.get("/cookenu/user/:id", perfilUserId) // Perfil de outro Usuario pelo id
app.delete("/cookenu/user/unfollow", userUnFollow) // Deixar de seguir
