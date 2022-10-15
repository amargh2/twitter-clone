import Post from "../../models/Post";
import connectMongo from "../../utils/connectMongo";
import User from "../../models/User";
import clientPromise from "../../utils/mongodb";
import { MongoClient } from "mongodb";
export default async function getPosts(req, res, next) {
  try {
    const pipeline = [
      {
        '$match': {}
      }
    ]
    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db('test')
    const posts = await db.collection('posts').find({})
    res.send(posts)
  } catch (err) {
    res.send(err)
  }
}