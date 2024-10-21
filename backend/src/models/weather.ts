import mongoose, { Schema, Document } from "mongoose";

export interface IWeather extends Document {
  city: string;
  main: string;
  temp: number;
  feels_like: number;
  dt: number;
}

const WeatherSchema: Schema = new Schema({
  city: { type: String, required: true },
  main: { type: String, required: true },
  temp: { type: Number, required: true },
  feels_like: { type: Number, required: true },
  dt: { type: Number, required: true },
});

export default mongoose.model<IWeather>("Weather", WeatherSchema);
