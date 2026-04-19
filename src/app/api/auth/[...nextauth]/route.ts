import { nextAuthConfig } from "@/lib/NextAuth.Config"
import NextAuth from "next-auth"

const handler = NextAuth(nextAuthConfig)

export { handler as GET, handler as POST }