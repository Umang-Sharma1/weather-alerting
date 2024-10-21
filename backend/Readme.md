# Backend - Weather Monitoring System

## Overview
This backend service fetches weather data from OpenWeatherMap, processes and stores it in MongoDB, and sends email alerts using SendGrid when weather conditions exceed predefined thresholds.

## Setup

### Prerequisites
- Node.js
- MongoDB
- SendGrid account

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/weather-monitoring-system.git
   cd weather-monitoring-system/backend
2.**Install dependencies**:
```bash
  npm install
```
3.**Set up environment variables: Create a .env file in the backend directory with the following content**:

.env
```bash
MONGO_URI=your_mongodb_connection_string
OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_TEMPLATE_ID=your_template_id
TEMP_THRESHOLD=35
```
4.**Run the backend server**:

```bash
npm run dev
```
## API Endpoints

### Fetch Weather Data
- **URL**: `/api/weather/fetch`
- **Method**: GET
- **Description**: Fetches weather data from OpenWeatherMap and stores it in MongoDB.

### Check Weather and Send Alerts
- **URL**: `/api/weather/check-weather`
- **Method**: POST
- **Description**: Checks the weather data and sends alerts if thresholds are exceeded.

### Summaries
- **URL**: `/api/weather/summaries`
- **Method**: GET
- **Description**: Fetches daily weather summaries.

## Folder Structure
```plaintext
backend/
├── src/
│   ├── config/
│   │   └── db.ts
│   ├── controllers/
│   │   ├── weatherController.ts
│   │   └── weatherSummary.ts
│   ├── models/
│   │   ├── weather.ts
│   │   └── weatherSummary.ts
│   ├── routes/
│   │   └── weatherRoutes.ts
│   ├── service/
│   │   ├── weatherService.ts
│   │   └── weatherSummaryService.ts
│   ├── utils/
│   │   ├── alert.ts
│   │   └── index.ts
│   └── index.ts
├── .env
└── package.json
```
Screenshots
![calculating summaries](https://github.com/Umang-Sharma1/weather-alerting/blob/main/Screenshot%202024-10-21%20235416.png)
![Fetching weather and sending alerts](https://github.com/Umang-Sharma1/weather-alerting/blob/main/Screenshot%202024-10-21%20235331.png)
![Weather Data Alert sent successful](https://github.com/Umang-Sharma1/weather-alerting/blob/main/Screenshot%202024-10-21%20235153.png)
![Alert showing on gmail](https://github.com/Umang-Sharma1/weather-alerting/blob/main/Screenshot%202024-10-21%20235626.png)

Contributions
Feel free to submit issues and pull requests.

License
MIT License
