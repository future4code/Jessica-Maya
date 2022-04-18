export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL"
}

export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN"
}

export interface UserCasino {
    name: string,
    age: number,
    nacionality: NACIONALITY
}

export interface Casino {
    name: string,
    location: LOCATION
}

// Saídas

export interface ResultItem {
    allowed: string[],
    unallowed: string[]
}

export interface Result {
    brazilians: ResultItem,
    americans: ResultItem
}
