import { Schema, model, models, isObjectIdOrHexString } from 'mongoose';

const User = new Schema({
  username: {type: String, unique:true, required:true},
  name: {type: String, required: true},
  email: {type: String, default:'', unique:true, required:true},
  likes: Array
})



export default models.User || model('User', User)