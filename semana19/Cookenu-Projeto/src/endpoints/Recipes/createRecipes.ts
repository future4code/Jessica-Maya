import { Request, Response } from "express"
import { RecipeDataBase } from "../../data/RecipeDataBase"
import { Recipe } from "../../entities/Recipes"
import { IdGenerator } from "../../services/IdGenerator"

export async function createRecipes(req: Request, res: Response) {
    try{
        let {title, description, cratedAt, image_url, user_id} = req.body

        if(!title || !description || !cratedAt || !user_id ) {
            res.status(422).send("Insira corretamente as informações de 'title', 'description', 'cratedAt' e 'user_id'")
        }

        const formatDefaultDate = (data: any) => {
            let arrayDate = data && data.split("/");
            let [year, month, day] = [
              arrayDate && arrayDate[2],
              arrayDate && arrayDate[1],
              arrayDate && arrayDate[0],
            ];
            let usefullDate = `${year}-${month}-${day}`;
            return usefullDate;
          };
          formatDefaultDate(cratedAt);
      
          const formatDate = () => {
            const todayDate = new Date().toISOString();
            let nwd = todayDate && todayDate.split("-");
            let [year, month, newdt] = [
              nwd && nwd[0],
              nwd && nwd[1],
              nwd && nwd[2].split("T"),
            ];
            let [day] = [newdt && newdt[0], newdt && newdt[1].split(".")];
            let currentData: string = `${year}-${month}-${day}`;
            return currentData;
          };
          const date = formatDate();
          cratedAt = formatDefaultDate(cratedAt);
      
         if (formatDefaultDate(cratedAt).valueOf() < date.valueOf()) {
            res.statusCode = 422;
            throw new Error(`A deadline must be later than the current date.`);
          }

        const recipeDataBase = new RecipeDataBase()
        const recipe = await recipeDataBase.findRecipeTitle(title)

        if(recipe) {
            res.status(409).send("Essa receita já está cadastrado")
        }
       
        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const newRecipe = new Recipe(id, title, description, cratedAt, image_url, user_id)
        await recipeDataBase.createRecipe(newRecipe)

        res.status(200).send({message: "Receita criada com sucesso"})
    }catch (error){
    res.status(400).send(error.message)
    }
}