import { CartItemType } from "./CartItemType";
import { OrderShippingAddressType } from "./OrderShippingAddressType";
import { UserInfoType } from "./UserInfoType";

export interface OrderResType {
  _id: string;
  id: number;
  user: UserInfoType
  shippingAddress?: OrderShippingAddressType
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: "cash" | "card";
  isPaid: boolean;
  isDelivered: boolean;
  cartItems: CartItemType[];
  createdAt: string;
  updatedAt: string;
}