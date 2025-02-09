import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('Connected to database !!');
  } catch (error) {
    console.log('Connection failed!');
    throw error;
  }
};

export default connectDB;
