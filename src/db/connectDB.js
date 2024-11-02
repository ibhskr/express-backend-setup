import mongoose from "mongoose";

process.loadEnvFile();

async function connectDB() {
  const URI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(URI);
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
}

export default connectDB;
