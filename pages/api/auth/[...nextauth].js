import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { unstable_getServerSession } from "next-auth/next";
import res from "express/lib/response";

//nextauth configuration options

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.clientId,
      clientSecret: process.env.clientSecret
    })
  ],
  //changed default signin page to custom page ['/login']
  pages: {
    signIn: '/login'
  },
  secret:process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)