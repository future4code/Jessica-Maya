import {  ProductInsert } from "../model/Product";
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

    async productValidation(name: string): Promise<ProductInsert>{
        try {
            const product = await this.getConnection()
            .select("*")
            .where({name})
            .from(ProductDataBase.TABLE_NAME)

            return product[0]
            
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")
            }
        }
    }

    async findProductByName(name: string) {
        try {
        
           
        const product = await this.getConnection()
            .select(["amaro_product.id as id do produto","amaro_product.name as nome do produto",
           "amaro_product.size as tamanho", "amaro_product.price as preço"])
           .from(ProductDataBase.TABLE_NAME)
           .where({"amaro_product.name": name})
            
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