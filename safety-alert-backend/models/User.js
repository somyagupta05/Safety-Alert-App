import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    emergencyContacts: [{ type: String, required: true }], // Array of phone numbers
    location: {
      latitude: { type: Number },
      longitude: { type: Number },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
