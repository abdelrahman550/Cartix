import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getTokenFromCookies() {
  const myCookies = await cookies();

  const tokenFromCookies = myCookies.get("next-auth.session-token")?.value;

  const finalToken = await decode({
    token: tokenFromCookies,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  return finalToken?.realTokenFromBackEnd;
}
