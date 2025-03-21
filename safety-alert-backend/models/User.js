import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  phoneNumber: { type: String, unique: true },
  emergencyContacts: [String],
  location: {
    latitude: Number,
    longitude: Number,
    timestamp: { type: Date, default: Date.now },
  },
});

const User = mongoose.model("User", UserSchema);
export default User;  // ✅ Ensure you're exporting the model as default
