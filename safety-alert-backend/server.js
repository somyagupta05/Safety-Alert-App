import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"; 
import alertRoutes from "./routes/alertRoutes.js";
import locationRoutes from "./routes/locationRoutes.js";
import authRoutes from "./routes/authRoutes.js"; 
dotenv.config();
const app = express();
// const authRoutes = require("./routes/authRoutes");
// import authRoutes from "./routes/authRoutes.js"
// Middleware
app.use(express.json());
app.use(cors());

// Connect Database
connectDB();

// Routes
app.use("/api/", authRoutes);
app.use("/api/users", userRoutes); // Use user routes
app.use("/api/location", locationRoutes);
app.use("/api/alert", alertRoutes);
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Test API
app.get("/", (req, res) => {
  res.send("Safety Alert API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
