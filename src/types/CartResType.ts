import { CartItemType } from "./CartItemType"

export interface CartResType {
    cartId : string,
    message : string,
    numOfCartItems : number,
    status : string,

    data : {
        totalCartPrice : number,
        products : CartItemType[],
        cartOwner : string
    }
}

