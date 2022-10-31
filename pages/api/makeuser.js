import User from "../../models/User";
import connectMongo from "../../utils/connectMongo";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
export default async function makeUser(req, res, next){
   try {
    await connectMongo()
    const checkUserName = await User.find({username:req.body.username})
    if (checkUserName[0] === undefined){
      const session = await unstable_getServerSession(req, res, authOptions)
      const user = new User({
      username:req.body.username,
      name: session.user.name,
      email: session.user.email,
      })
      await user.save()
      res.redirect('/')
    }
    if (checkUserName[0] !== null) {
      res.redirect('/register?message=username taken')
    }
  } catch (err) {
    res.send(err.message)
  }
}