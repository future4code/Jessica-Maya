import { ProdutoTagInputDTO } from "../model/ProductTagId"
import { BaseDataBase } from "./BaseDataBase"

export class ProductTagIdDataBase extends BaseDataBase {

    private static TABLE_NAME = "amaro_product_tags"

    async insertProductTagId(productTag: ProdutoTagInputDTO) {

        try {
    
            await this.getConnection()
            .insert(productTag)
            .into(ProductTagIdDataBase.TABLE_NAME)

        } catch (error) {
             if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")
            }
        }
    }

    async getProduct_TagsByIdProduct(id_product: string) {
        try {
        
        const product = await this.getConnection()
        .select("amaro_product.id as id do produto", "amaro_product.name as nome do produto",
        "amaro_product.size as tamanho do produto","amaro_product.price as preço do produto", "amaro_tags.name")
      .innerJoin("amaro_product", "amaro_product_tags.id_product", "amaro_product.id")
      .innerJoin("amaro_tags", "amaro_tags.id", "amaro_product_tags.id_tags")
      .from(ProductTagIdDataBase.TABLE_NAME)
      .where({"amaro_product_tags.id_product": id_product })

            return product
            
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")
            }
        }
    }

    async getProduct_TagsByIdTags(id_tag: string) {
        try {
        
        const [tag ]= await this.getConnection()
        .select(["amaro_product.id as id do produto", "amaro_product.name as nome do produto",
        "amaro_product.size as tamanho do produto","amaro_product.price as preço do produto", "amaro_tags.name"])
        .innerJoin("amaro_tags", "amaro_product_tags.id_tags", "amaro_tags.id")
        .innerJoin("amaro_product", "amaro_product_tags.id_product", "amaro_product.id")
        .from(ProductTagIdDataBase.TABLE_NAME)
        .where({"amaro_product_tags.id_tags": id_tag})
                
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