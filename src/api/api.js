const dev_weatherKey = "2ff4a2da7a34436b96711fb8f61d52d5";

export const getCurrentWeatherApi = (coordinates) =>
  `https://devapi.qweather.com/v7/weather/now?location=${coordinates}&key=${dev_weatherKey}`;
