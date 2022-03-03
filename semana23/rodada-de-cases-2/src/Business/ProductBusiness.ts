import { ProductDataBase } from "../data/ProductDataBase";
import { MissingFieldsToComplet } from "../Error/MissingFieldsToComplet";
import { ProductInput, ProductInsert } from "../model/Product";
import IdGenerator from "../services/IdGenerator";

export class ProductBusiness {

    async createProduct(input: ProductInput) {
        
        if(!input.name || !input.size ||!input.price) {
            throw new MissingFieldsToComplet()
        }

            const product: ProductInsert = {
            id: IdGenerator.generate(),
            name: input.name,
            size: input.size,
            price: input.price
        }
            
        const productDataBase = new ProductDataBase()

        const productName  = await productDataBase.productValidation(product.name)

        if(productName) {
            throw new Error("Product já cadastrado")
        }

        const newProduct = await productDataBase.insertProduct(product)

        return newProduct
    }

    async getProductByNameBusiness(name: string) {

        if(!name) {
            throw new Error("Fill the name in params")
        }
        
        const productTagDataBase = new ProductDataBase()
        const result =  await productTagDataBase.findProductByName(name)

        

        if(!result) {
            throw new Error("There is no product")
        }
        
        return result
    }


}