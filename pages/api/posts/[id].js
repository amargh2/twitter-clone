import Post from '../../../models/Post'
export default async function getPosts(req, res, next) {
  try {
    const posts = await Post.findById('634b01785d75bb32fff10fa9').populate('user').lean()
    const processedPosts = await JSON.parse(JSON.stringify(posts))
    res.send(processedPosts)
  } catch (err) {
    res.send(err)
  }
}