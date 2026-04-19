export interface ShippingAddressType {
    shippingAddress : {
        details : string,
        phone: string,
        city: string,
        postalCode? : string
    }
}