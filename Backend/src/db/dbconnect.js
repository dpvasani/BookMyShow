import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
  try {
    console.log(`Connecting to MongoDB at: ${process.env.MONGODB_URL}/${DB_NAME}`);
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`MongoDB Connected. DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error", error);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;
