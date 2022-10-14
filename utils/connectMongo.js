import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(process.env.MONGO_URI);4

export default connectMongo;