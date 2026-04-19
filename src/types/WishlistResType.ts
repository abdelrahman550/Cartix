import { ProductResType } from "./ProductResType";

export interface WishlistResType {
    status: string,
    count: number,
    data: ProductResType[],
    message? : string,
}