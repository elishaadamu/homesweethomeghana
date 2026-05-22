import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "./lib/prisma"
import bcrypt from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string }
        })
        
        if (!user || !user.password) {
          return null
        }
        
        const isPasswordValid = await bcrypt.compare(credentials.password as string, user.password)
        
        if (!isPasswordValid) {
          return null
        }
        
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          memberType: user.memberType,
        }
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.memberType = (user as any).memberType;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as any).memberType = token.memberType;
      }
      return session;
    }
  },
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/auth",
  }
})
