import { Schema, model, models, isObjectIdOrHexString } from 'mongoose';

const User = new Schema({
  name: String,
  username: String,
  likes: Array
})



export default models.User || model('User', User)