import { ProductDataBase } from "../data/ProductDataBase";
import { MissingFieldsToComplet } from "../Error/MissingFieldsToComplet";
import { ProductInput, ProductInsert } from "../model/Product";
import IdGenerator from "../services/IdGenerator";

export class ProductBusiness {

    async createProduct(input: ProductInput) {
        
        if(!input.name || !input.tags) {
            throw new MissingFieldsToComplet()
        }

            const product: ProductInsert = {
            id: IdGenerator.generate(),
            name: input.name,
            tags: input.tags
        }
            
        const productDataBase = new ProductDataBase()

        const newProduct = await productDataBase.insertProduct(product)
        
        const id  = await productDataBase.findProductById(product.id)

        if(id) {
            throw new Error("Product já cadastrado")
        }

        return newProduct
    }

}