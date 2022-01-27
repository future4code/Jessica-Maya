import { Product, ProductInsert } from "../model/Product";
import { BaseDataBase } from "./BaseDataBase";


export class ProductDataBase extends BaseDataBase {

    private static TABLE_NAME = "amaro_product"

    async insertProduct(product: ProductInsert) {

        try {
    
            await this.getConnection()
            .insert(product)
            .into(ProductDataBase.TABLE_NAME)
            
            return "Product created successfully"

        } catch (error) {
             if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")
            }
        }
    }

    async findProductById(id: string) {
        try {
            const product: Product = await this.getConnection()
            .select()
            .where({ id: id })
            .from(ProductDataBase.TABLE_NAME)

            return product
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")
            }
        }
    }
}