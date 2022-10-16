import Post from "../../models/Post"

export default async function getPostsById(req,res) {
  try {
    const id = '634c254d5d75bb32fff110cd'
    const userPosts = await Post.find({user: id}).populate('user').lean()
    res.send(userPosts)
  } catch (err) {
    res.send('error error will robinson: ' + err)
  }
}