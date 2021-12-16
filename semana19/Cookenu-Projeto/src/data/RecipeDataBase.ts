import { Recipe } from "../entities/Recipes";
import { BaseDataBase } from "./BaseDataBase"

export class RecipeDataBase extends BaseDataBase {
    public async createRecipe(recipe: Recipe) {
        try{
        await BaseDataBase.connection("Cookenu_Recipe")
        .insert({
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            cratedAt: recipe.getCratedAt(),
            image_url: recipe.getImage(),
            user_id: recipe.getUserId()
        })
    }catch(error) {
        throw new Error(error.sqlMessage || error.message)
    }
    }

    public async findRecipeTitle(title: string): Promise<Recipe> {
        try {
            const recipe = await BaseDataBase.connection("Cookenu_Recipe")
            .select("*")
            .where({title: title})

        return Recipe.toRecipeModel(recipe[0])
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getAllRecipes(): Promise <Recipe[]> {
        try{
        const recipe = await BaseDataBase.connection("Cookenu_Recipe")
        .select("id", "title", "description", "cratedAt, image_url")
        return recipe.map((recipe => Recipe.toRecipeModel(recipe)))

        }catch(error) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    
}