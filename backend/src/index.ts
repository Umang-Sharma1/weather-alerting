import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import weatherRoutes from "./routes/weatherRoutes";
import { calculateDailySummaries } from "./services/weatherSummaryService";
import cron from "node-cron";
import Weather from "./models/weather"; // Import the Weather model

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Test API endpoint
app.get("/api/test", (req, res) => {
  res.send("API is working!");
});

// Test MongoDB connection
app.get("/api/test-db", async (req, res) => {
  try {
    const weatherData = await Weather.find();
    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Database connection failed." });
  }
});

// Temporary route to manually trigger summary calculation
app.get("/api/calculate-summaries", async (req, res) => {
  try {
    await calculateDailySummaries();
    res.status(200).json({ message: "Daily summaries calculated and saved." });
  } catch (error) {
    res.status(500).json({ error: "Error calculating daily summaries." });
  }
});

app.use("/api/weather", weatherRoutes);

// Schedule daily summary calculation at midnight
cron.schedule("0 0 * * *", () => {
  console.log("Calculating daily summaries...");
  calculateDailySummaries();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
