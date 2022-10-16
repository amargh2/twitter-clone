import PostsArea from "../../components/PostsArea"
import Post from "../../models/Post"
import connectMongo from "../../utils/connectMongo"
import User from "../../models/User"
export default async function handler(req, res) {
  try {
    const posts = await Post.find({}).populate('user').lean()
    res.send({posts})
  } catch (err) {
    res.send(err)
  }
}