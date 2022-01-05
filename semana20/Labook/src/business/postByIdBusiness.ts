import { PostDataBase } from "../data/PostDataBase"
import { posts } from "../model/Post"


export class postByIdBusiness {

    postById = async (
        id: string
    ): Promise<posts> => {

        const post = await new PostDataBase().getPostById(id)

        return post
    }
}