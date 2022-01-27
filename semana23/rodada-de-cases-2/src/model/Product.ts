export class Product {
    constructor (
        private id: string,
        private name: string,
        private tags: string
    ) {}

    static toProductModel(product: Product) {
        return new Product(product.id, product.name, product.tags)
    }

}

export type ProductInput = {
    name: string,
    tags: string
}

export interface ProductInsert extends ProductInput {
    id: string
} 