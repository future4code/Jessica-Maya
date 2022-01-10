import formatDate  from "../services/dataFormat"

export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private cratedAt: string,
        private image_url: string,
        private user_id: string
    ) {}

    public getId() {
        return this.id
    }
    public getTitle() {
        return this.title
    }
    public getDescription() {
        return this.description
    }
    public getCratedAt() {
        return this.cratedAt
    }
    public getImage() {
        return this.image_url
    }
    public getUserId() {
        return this.user_id
    }
       
    static toRecipeModel(data: any): Recipe {
        return new Recipe(data.id, data.title, data.description,
            formatDate(data.cratedAt), data.image_url, data.user_id,)
    }
}