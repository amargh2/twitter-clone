import Post from "../../models/Post";
import connectMongo from "../../utils/connectMongo";
import User from "../../models/User";
export default async function getPosts(req, res, next) {
  try {
    const posts = await Post.find({}).populate('user').lean()
    const processedPosts = await JSON.parse(JSON.stringify(posts))
  } catch (err) {
    res.send(err)
  }
}