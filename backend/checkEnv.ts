import dotenv from "dotenv";

dotenv.config();

console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("OPENWEATHERMAP_API_KEY:", process.env.OPENWEATHERMAP_API_KEY);