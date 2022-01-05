export enum POST_TYPES {
    NORMAL = "NORMAL",
    EVENT = "EVENT"
}

export interface posts {
    id: string,
    photo: string,
    description: string,
    creationData: Date,
    type: POST_TYPES,
    userId: string
}