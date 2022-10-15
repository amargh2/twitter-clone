import next from "next"
import Post from "../../models/Post"
import User from "../../models/User"

export default async function post(req, res, next) {
  try {
    const post = new Post({
      user:await User.findById('6348cd05003bf479547c08ef'),
      content: req.query.message,
      date: new Date().toLocaleString()
    })
    await post.save()
    res.redirect('/')
  } catch (err) {
    res.send(err)
  }

}