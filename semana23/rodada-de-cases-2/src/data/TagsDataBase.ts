import {TagsInsert } from "../model/Tags";
import { BaseDataBase } from "./BaseDataBase";

export class TagsDataBase extends BaseDataBase {

    private static TABLE_NAME = "amaro_tags"

    async insertTags(tags: TagsInsert) {

        try {
    
            await this.getConnection()
            .insert(tags)
            .into(TagsDataBase.TABLE_NAME)
            
            return "Tag created successfully"

        } catch (error) {
             if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")
            }
        }
    }

    async findTagByName(name: string) {
        try {
        
        const tag = await this.getConnection()
        .select(["amaro_tags.id as id ", "amaro_tags.name as nome da tag"])
      .from(TagsDataBase.TABLE_NAME)
      .where({"amaro_tags.name": name})
            
            return tag
            
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")
            }
        }
    }
    
}