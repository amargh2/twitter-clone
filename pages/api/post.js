import next from "next"
import Post from "../../models/Post"
import User from "../../models/User"

export default async function post(req, res, next) {
  try {
    const post = new Post({
      user:'634c254d5d75bb32fff110cd',
      content: req.query.message,
      date: new Date().toLocaleString()
    })
    await post.save()
    res.redirect('/')
  } catch (err) {
    res.send(err)
  }

}