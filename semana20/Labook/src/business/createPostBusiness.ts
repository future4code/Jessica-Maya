import { PostDataBase } from "../data/PostDataBase"
import { IdGenerator } from "../services/IdGenerator"


export class createPostBusiness {

    createPost = async(post: any) => {
        if(
            !post.photo ||
            !post.description ||
            !post.creationData ||
            !post.type ||
            !post.userId
        ) {
            throw new Error("Preencha os campos 'photo', 'description', 'creationData', 'type' e 'userId' ")
        }

        const idGeneretor = new IdGenerator()
        const id = idGeneretor.generate()

        await new PostDataBase().insertPost({
            id,
            photo: post.photo,
            description: post.description,
            creationData: post.creationData,
            type: post.type,
            userId: post.userId
        })
    }
}