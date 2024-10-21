import { Request, Response } from "express";
import Weather from "../models/weather";
import { fetchWeatherData } from "../services/weatherService";
import { sendAlert } from "../utils/alert";
import dotenv from "dotenv";

dotenv.config();

const TEMP_THRESHOLD = parseFloat(process.env.TEMP_THRESHOLD || "35");

export const getWeatherData = async (req: Request, res: Response) => {
  try {
    const weatherDataArray = await fetchWeatherData();
    for (const data of weatherDataArray) {
      const weather = new Weather({
        city: data.name,
        main: data.weather[0].main,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        dt: data.dt,
      });
      await weather.save();
      if (weather.temp > TEMP_THRESHOLD) {
        await sendAlert(
          "hemangsharma1000@gmail.com", // Example recipient email
          weather.temp,
          weather.main
        );
      }
    }
    res.status(200).json({
      message: "Weather data saved and alerts processed successfully.",
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching or saving weather data." });
  }
};
