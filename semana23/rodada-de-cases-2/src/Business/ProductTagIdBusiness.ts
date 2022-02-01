import { ProductTagIdDataBase } from "../data/ProductTagIdDataBase";
import { MissingFieldsToComplet } from "../Error/MissingFieldsToComplet";
import { ProductTagInput, ProdutoTagInputDTO } from "../model/ProductTagId";

export class ProductTagIdBusiness {

    async createProductTagId(input: ProductTagInput) {

         if(!input.id_product|| !input.id_tags ) {
            throw new MissingFieldsToComplet()
        }

        for(let i = 0; i < input.id_tags.length; i++) {   
            const tag =  input.id_tags[i]           
            const productTagInput: ProdutoTagInputDTO= {
                id_product: input.id_product,
                id_tags: [tag]
            }
            const productTagDataBase = new ProductTagIdDataBase()
            await productTagDataBase.insertProductTagId(productTagInput)
        }
        
            return "Product e Tag created successfully"
    }

    async getProduct_TagsByIdProductBusiness(id_product: string) {

        if(!id_product) {
            throw new Error("Fill the id_product in params")
        }

    
        const productTagIdProductDataBase = new ProductTagIdDataBase()
        const result =  await productTagIdProductDataBase.getProduct_TagsByIdProduct(id_product)

        const produtos = {
            idDoProduto: result[0]["id do produto"],
            nomeDoProduto: result[0]["nome do produto"],
            tamanho: result[0]["tamanho do produto"],
            preco: result[0]["preço do produto"],
            tag: result.map((index) =>{
                return   index.name
            })
        }

        if(!produtos) {
            throw new Error("There is no product")
        }
        return produtos
        
    }

    async getProduct_TagsByIdTagBusiness(id_tag: string) {

        if(!id_tag) {
            throw new Error("Fill the id_tag in query")
        }


        const productTagIdTagDataBase = new ProductTagIdDataBase()
        const result = await productTagIdTagDataBase.getProduct_TagsByIdTags(id_tag)

        if(! result) {
            throw new Error("There is no product in this tag")
        }
        return result
    }

}