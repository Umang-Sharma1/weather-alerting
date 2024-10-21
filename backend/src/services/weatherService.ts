import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const cities = ["Delhi", "Mumbai", "Chennai", "Bangalore", "Hyderabad"];

export const fetchWeatherData = async () => {
  try {
    const weatherDataPromises = cities.map((city) => {
      const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
      return axios.get(url);
    });

    const weatherDataResponses = await Promise.all(weatherDataPromises);
    const weatherData = weatherDataResponses.map((response) => response.data);

    // Remove this line
    // console.log('Fetched Weather Data:', weatherData);

    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
