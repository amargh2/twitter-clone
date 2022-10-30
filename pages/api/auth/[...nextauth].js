import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { unstable_getServerSession } from "next-auth/next";
import res from "express/lib/response";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.clientId,
      clientSecret: process.env.clientSecret
    })
  ],

}

export default NextAuth(authOptions)