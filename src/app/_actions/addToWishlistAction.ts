"use server";

import { WishlistResType } from "@/types/WishlistResType";
import { getTokenFromCookies } from "@/utils/getTokenFromCookies";

export async function addProductToWishlist(id: string): Promise<WishlistResType> {
  const token = await getTokenFromCookies();

  const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
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
