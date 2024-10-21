import { Request, Response } from "express";
import WeatherSummary from "../models/weatherSummary";

export const getWeatherSummaries = async (req: Request, res: Response) => {
  try {
    const summaries = await WeatherSummary.find();
    res.status(200).json(summaries);
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather summaries." });
  }
};
