import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/todoApp");
  console.log(`mongoose is connect with ${mongoose.connection.host}`);
};
