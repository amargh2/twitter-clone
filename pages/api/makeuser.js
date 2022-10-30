import next from "next";
import User from "../../models/User";
import connectMongo from "../../utils/connectMongo";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
export default async function makeUser(req, res, next){
   try {
    const session = await unstable_getServerSession(req, res, authOptions)
    console.log(session)
    await connectMongo()
    const user = new User({
    username:req.body.username,
    name: session.user.name,
    email: session.user.email,
    })
    await user.save()
    res.send(typeof(session.user.email))
  } catch (err) {
    res.send(err.message)
  }
}