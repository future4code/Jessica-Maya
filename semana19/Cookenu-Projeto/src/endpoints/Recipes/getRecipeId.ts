import { Request, Response } from "express"
import { RecipeDataBase } from "../../data/RecipeDataBase"
import { Authenticator } from "../../services/Authenticator"

export async function getRecipeId(req: Request, res: Response) {
    try{
        const token = req.headers.authorization
        const id: string = req.params.id 

        if(!token || !id) {
            res.status(422).send("Esse endpoint precisa de uma autorização a ser passada nos headers e params")
        }

        const tokenData = new Authenticator().getTokenData(token)

        if(!tokenData) {
            res.status(403).send("Não Autorizado")
        }

        const recipe = await new RecipeDataBase().getAllRecipesId(id)

        if(!recipe){
            res.status(404).send("Receita não encontrada.")
        }

        res.status(200).send(recipe)

    }catch (error){
    res.status(400).send(error.message)
    }
}