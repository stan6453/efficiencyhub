export interface IProduct {
    _id: string
    name: string,
    category: string,
    images:string[],
}

export type Products = IProduct[];