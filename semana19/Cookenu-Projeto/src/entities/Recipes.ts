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
    public getUserId() {
        return this.user_id
    }
    public getImage() {
        return this.image_url
    }
       
    static toRecipeModel(data: any): Recipe {
        return new Recipe(data.id, data.title, data.description,
             data.cratedAt, data.user_id, data.image_url)
    }
}