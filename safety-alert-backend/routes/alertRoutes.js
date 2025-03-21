import express from "express";
import twilio from "twilio";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();
const router = express.Router();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Send Emergency Alert
router.post("/send-alert/:phoneNumber", async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const { phoneNumber } = req.params;

    // Find user by phone number
    const user = await User.findOne({ phoneNumber });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Store last known location
    user.lastKnownLocation = { latitude, longitude, timestamp: new Date() };
    await user.save();

    // Construct SOS message
    const message = `🚨 EMERGENCY ALERT 🚨\n${user.name} is in danger!\nLive Location: https://www.google.com/maps?q=${latitude},${longitude}`;

    // Send SMS to all emergency contacts
    const smsPromises = user.emergencyContacts.map(contact =>
      client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: contact,
      })
    );

    await Promise.all(smsPromises);
    res.json({ message: "Emergency alert sent successfully & location stored!" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// for location
router.get("/location/:phoneNumber", async (req, res) => {
  try {
    const user = await User.findOne({ phoneNumber: req.params.phoneNumber });
    if (!user || !user.lastKnownLocation)
      return res.status(404).json({ message: "Location not found" });

    res.json(user.lastKnownLocation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
