import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Cartix",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            body: JSON.stringify(credentials),
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        const finalRes = await res.json();

        if (!res.ok) {
          throw new Error(finalRes.message || "Login failed");
        }

        return {
          id: finalRes.user.email,
          name: finalRes.user.name,
          email: finalRes.user.email,
          realTokenFromBackEnd: finalRes.token,
        };
      },
    }),
  ],

  callbacks: {
    jwt(params) {
      if (params.user) {
        params.token.realTokenFromBackEnd = params.user.realTokenFromBackEnd;
      }

      return params.token;
    },

    session(params) {
      return params.session;
    },
  },

  pages: {
    signIn: "/Login",
  },
};
