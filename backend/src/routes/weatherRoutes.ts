import { Router } from "express";
import { getWeatherData } from "../controllers/weatherController";
import { getWeatherSummaries } from "../controllers/weatherSummaryController";
import { sendAlert } from "../utils/alert";

const router = Router();

router.get("/fetch", getWeatherData);
router.get("/summaries", getWeatherSummaries); // Existing route to fetch summaries
router.post("/check-weather", getWeatherData); // New route to check weather and trigger alerts
router.get("/test-email", async (req, res) => {
  try {
    await sendAlert(
      "umangsharma1905@gmail.com", // Use your email to check
      99, // Arbitrary temperature for testing
      "Test Condition"
    );
    res.send("Test email sent");
  } catch (error) {
    res.status(500).send("Failed to send test email");
  }
});

export default router;
