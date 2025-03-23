import express from "express";
import User from "../models/User.js"; // Ensure this is an ES module

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { name, phoneNumber, emergencyContact } = req.body;
        let user = await User.findOne({ phoneNumber });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        user = new User({ name, phoneNumber, emergencyContact });
        await user.save();
        res.status(201).json({ message: "Signup successful", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { phoneNumber } = req.body;
        let user = await User.findOne({ phoneNumber });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

export default router; // Use ES Module export
