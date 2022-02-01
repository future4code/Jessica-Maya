import { TagsDataBase } from "../data/TagsDataBase";
import { MissingFieldsToComplet } from "../Error/MissingFieldsToComplet";
import { TagsInput, TagsInsert } from "../model/Tags";
import IdGenerator from "../services/IdGenerator";

export class TagsBusiness {
//tags: JSON.stringify(tags)
    async createTags(input: TagsInput) {

        if(!input.name) {
            throw new MissingFieldsToComplet()
        }

            const tag: TagsInsert = {
            id: IdGenerator.generate(),
            name: input.name
        }
            
        const tagsDataBase = new TagsDataBase()

        const newTags = await tagsDataBase.insertTags(tag)
        
        return newTags
    }

    async getTagByNameBusiness(name: string) {

        if(!name) {
            throw new Error("Fill the name in params")
        }

        const productTagDataBase = new TagsDataBase()
        const result = await productTagDataBase.findTagByName(name)

        return result
    }

}
        