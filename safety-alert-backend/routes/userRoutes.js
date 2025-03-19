import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
  try {
    const { name, phoneNumber, emergencyContacts } = req.body;

    // Check if user already exists
    let user = await User.findOne({ phoneNumber });
    if (user) return res.status(400).json({ message: "User already exists" });

    // Create new user
    user = new User({ name, phoneNumber, emergencyContacts });
    await user.save();

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get User Details
router.get("/:phoneNumber", async (req, res) => {
  try {
    const user = await User.findOne({ phoneNumber: req.params.phoneNumber });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Emergency Contacts
router.put("/:phoneNumber/update", async (req, res) => {
  try {
    const { emergencyContacts } = req.body;

    let user = await User.findOneAndUpdate(
      { phoneNumber: req.params.phoneNumber },
      { emergencyContacts },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "Emergency contacts updated", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
