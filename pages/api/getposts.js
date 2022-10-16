import Post from "../../models/Post";
import connectMongo from "../../utils/connectMongo";
import User from "../../models/User";
import clientPromise from "../../utils/mongodb";
import { MongoClient } from "mongodb";
export default async function getPosts(req, res, next) {
  try {
    const posts = await Post.find({}).populate('user')
    res.send(await JSON.parse(JSON.stringify(posts)))
  } catch (err) {
    res.send(err)
  }
}