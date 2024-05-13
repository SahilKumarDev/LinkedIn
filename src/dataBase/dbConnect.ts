import mongoose, { Connection } from "mongoose";
let isConnected: Connection | Boolean = false;

const dbConnect = async () => {
  if (isConnected) {
    console.log("Mongoose already connected");

    return isConnected;
  }
  try {
    const res = await mongoose.connect(process.env.MONGO0SE_URL!);
    isConnected = res.connection;

    console.log("Mongoose connected successfully");

    return isConnected;
  } catch (error) {
    console.log("Mongoose not connected successfully :- ", error);
  }
};

export default dbConnect;
