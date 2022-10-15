import PostsArea from "../../components/PostsArea"
import Post from "../../models/Post"
import connectMongo from "../../utils/connectMongo"
export default async function handler(req, res) {
  try {
    const posts = await Post.find({})
    res.status(200).json(posts)
  } catch (err) {
    res.send(err)
  }
}