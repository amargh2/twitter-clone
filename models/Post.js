import { Schema, model, models } from 'mongoose';

const Post = new Schema({
  user: {type:Schema.Types.ObjectId, ref:'User'},
  content: String,
  date: String,
})

export default models.Post || model('Post', Post)