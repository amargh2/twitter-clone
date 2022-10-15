import { Schema, model, models, isObjectIdOrHexString } from 'mongoose';

const User = new Schema({
  name: String,
  username: String,
})



export default models.User || model('User', User)