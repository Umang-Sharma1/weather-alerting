import Weather from "../models/weather";
import WeatherSummary from "../models/weatherSummary";

export const calculateDailySummaries = async () => {
  const cities = ["Delhi", "Mumbai", "Chennai", "Bangalore", "Hyderabad"];
  const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

  for (const city of cities) {
    const weatherData = await Weather.find({ city });

    if (weatherData.length === 0) {
      continue;
    }

    const tempValues = weatherData.map((data) => data.temp);
    const mainConditions = weatherData.map((data) => data.main);
    const dominantCondition =
      mainConditions
        .sort(
          (a, b) =>
            mainConditions.filter((v) => v === a).length -
            mainConditions.filter((v) => v === b).length
        )
        .pop() || "Unknown";

    const summary = new WeatherSummary({
      city,
      date: today,
      averageTemp: tempValues.reduce((a, b) => a + b, 0) / tempValues.length,
      maxTemp: Math.max(...tempValues),
      minTemp: Math.min(...tempValues),
      dominantCondition,
    });

    try {
      await summary.save();
    } catch (error) {
      console.error(`Error saving summary for ${city}:`, error);
    }
  }
};
