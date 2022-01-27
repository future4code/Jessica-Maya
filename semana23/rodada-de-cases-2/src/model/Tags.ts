export class Tags {
    constructor (
        private id: string,
        private name: string,
    ) {}

    static toProductModel(product: Tags) {
        return new Tags(product.id, product.name)
    }

}

export interface TagsInput {
    name: string,
}

export interface TagsInsert extends TagsInput {
    id: string
} 