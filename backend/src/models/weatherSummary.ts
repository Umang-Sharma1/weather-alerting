import mongoose, { Schema, Document } from "mongoose";

export interface IWeatherSummary extends Document {
  city: string;
  date: string;
  averageTemp: number;
  maxTemp: number;
  minTemp: number;
  dominantCondition: string;
}

const WeatherSummarySchema: Schema = new Schema({
  city: { type: String, required: true },
  date: { type: String, required: true },
  averageTemp: { type: Number, required: true },
  maxTemp: { type: Number, required: true },
  minTemp: { type: Number, required: true },
  dominantCondition: { type: String, required: true },
});

export default mongoose.model<IWeatherSummary>(
  "WeatherSummary",
  WeatherSummarySchema
);
