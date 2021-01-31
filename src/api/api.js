const dev_weatherKey = '2ff4a2da7a34436b96711fb8f61d52d5';
const prod_weatherKey = '834bbda19299440daa2a3c0af2cab421';

export const getCurrentWeatherApi = (coordinates) =>
  `https://devapi.qweather.com/v7/weather/now?location=${coordinates}&key=${dev_weatherKey}`;

export const getHourlyWeatherApi = (coordinates) =>
  `https://api.qweather.com/v7/weather/24h?location=${coordinates}&key=${prod_weatherKey}`;

export const getDailyWeatherApi = (coordinates) =>
  `https://devapi.qweather.com/v7/weather/7d?location=${coordinates}&key=${dev_weatherKey}`;
