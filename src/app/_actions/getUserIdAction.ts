"use server";
import { TokenResType } from "@/types/TokenResType";
import { getTokenFromCookies } from "@/utils/getTokenFromCookies";

export async function getUserIdFromToken() : Promise<TokenResType> {
  const token = await getTokenFromCookies();

  const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/verifyToken", {
    headers: {
      token: token as string,
    },
  });

  const finalRes = res.json();
  return finalRes;
}
