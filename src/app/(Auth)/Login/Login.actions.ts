"use server";

import { LoginDataValues } from "./Login.Schema";

export async function loginAction(values: LoginDataValues) {
  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    {
      body: JSON.stringify(values),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const finalRes = await res.json();

  return {
    loginOk: res.ok,
    loginMsg: finalRes.message,
  };
}
