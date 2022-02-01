export type ProductInput = {
    name: string,
    size: string,
    price: number
}

export interface ProductInsert extends ProductInput {
    id: string
} 