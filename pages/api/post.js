import Post from "../../models/Post"
import User from "../../models/User"
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

export default async function post(req, res, next) {
  try {
    const session = await unstable_getServerSession(req, res, authOptions)
    const userId = await User.find({email:session.user.email})
    console.log(session)
    console.log('this is the object id: ' + userId + ' ' + userId[0].id)
    const post = new Post({
      user: userId[0]._id,
      content: req.query.message,
      date: new Date().toLocaleString()
    })
    await post.save()
    res.redirect('/')
  } catch (err) {
    res.send(err)
  }

}