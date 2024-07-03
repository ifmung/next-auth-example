import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import "next-auth/jwt"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
})

declare module "next-auth" {
  interface Session {
    accessToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
  }
}
