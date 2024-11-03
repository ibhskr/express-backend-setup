import mongoose from "mongoose";

// Define the schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the model
const User = mongoose.model("User", userSchema);

// Export the model
export default User;
