"use server";
import { CartResType } from "@/types/CartResType";
import { getTokenFromCookies } from "@/utils/getTokenFromCookies";

export async function getUserCart() : Promise<CartResType> {
  const token = await getTokenFromCookies();

  const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    headers: {
      token: token as string,
    },
  });

  const finalRes = res.json();
  return finalRes;
}
