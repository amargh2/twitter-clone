import next from "next";
import User from "../../models/User";
import connectMongo from "../../utils/connectMongo";
export default async function makeUser(req, res, next){
   try {
    await connectMongo()
    const user = new User({
    name:'Anthony',
    username:'antho',
    })
    await user.save()
    res.redirect('/usercreated')
  } catch (err) {
    console.log(err)
  }
}