"use server";

import { CartResType } from "@/types/CartResType";
import { getTokenFromCookies } from "@/utils/getTokenFromCookies";

export async function addProductToCart(id: string): Promise<CartResType> {
  const token = await getTokenFromCookies();

  const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "POST",
    body: JSON.stringify({
      productId: id,
    }),
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
  });

  const finalRes = await res.json();

  return finalRes;
}
