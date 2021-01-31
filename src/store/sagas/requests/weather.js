import axios from 'axios';
import { getCurrentWeatherApi, getDailyWeatherApi, getHourlyWeatherApi } from '../../../api/api';

export const requestCurrentWeather = (coordinates) => {
  const requestUrl = getCurrentWeatherApi(coordinates);
  return axios.get(requestUrl);
};

export const requestHourlyWeather = (coordinates) => {
  const requestUrl = getHourlyWeatherApi(coordinates);
  return axios.get(
    'https://api.qweather.com/v7/weather/24h?location=116.41,39.92&key=834bbda19299440daa2a3c0af2cab421',
  );
};

export const requestDailyWeather = (coordinates) => {
  const requestUrl = getDailyWeatherApi(coordinates);
  return axios.get(requestUrl);
};
