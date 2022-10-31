import { unstable_getServerSession } from "next-auth";
import Nextauth from "./auth/[...nextauth]";
import User from "../../models/User";
import { authOptions } from "./auth/[...nextauth]";
export default async function checkifregistered(req, res) {  
  try {
    const session = await unstable_getServerSession(req, res, authOptions)
    const userid = await User.find({email:session.user.email})   
    if (session) {
      console.log('results of user query:' + userid)
      console.log(userid)
      userid[0] === undefined ? res.redirect('/register') : res.redirect('/')
    }
    if (!session) {
      res.redirect('/login')
    }
  } catch (error) {
    res.redirect('/login')
  }
}