import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Update User Location
router.put("/update-location/:phoneNumber", async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
      return res.status(400).json({ message: "Latitude and Longitude are required!" });
    }

    let user = await User.findOneAndUpdate(
      { phoneNumber: req.params.phoneNumber },
      { location: { latitude, longitude, timestamp: new Date() } },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "Location updated successfully", location: user.location });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
