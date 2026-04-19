"use server"
import { ShippingAddressType } from "@/types/CheckoutAddress";
import { getTokenFromCookies } from "@/utils/getTokenFromCookies";

export async function createCashOrder(
  cartId: string,
  shippingAddress: ShippingAddressType,
) {
  const token = await getTokenFromCookies();

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,
    {
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
      method: "POST",
      body: JSON.stringify( shippingAddress ),
    },
  );
  const finalRes = await res.json();

  return finalRes
}

export async function createVisaOrder(
  cartId: string,
  shippingAddress: ShippingAddressType,
) {
  const token = await getTokenFromCookies();

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}`,
    {
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
      method: "POST",
      body: JSON.stringify( shippingAddress ),
    },
  );
  const finalRes = await res.json();

  return finalRes
}