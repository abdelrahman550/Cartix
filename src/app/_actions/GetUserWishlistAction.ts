"use server";
import { WishlistResType } from "@/types/WishlistResType";
import { getTokenFromCookies } from "@/utils/getTokenFromCookies";

export async function getUserWishlist() : Promise<WishlistResType> {
  const token = await getTokenFromCookies();

  const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
    headers: {
      token: token as string,
    },
  });

  const finalRes = res.json();
  return finalRes;
}
