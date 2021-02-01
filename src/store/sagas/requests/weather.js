import axios from 'axios';
import { getCurrentWeatherApi, getDailyWeatherApi, getHourlyWeatherApi } from '../../../api/api';

export const requestCurrentWeather = (coordinates) => axios.get(getCurrentWeatherApi(coordinates));

export const requestHourlyWeather = (coordinates) => axios.get(getHourlyWeatherApi(coordinates));

export const requestDailyWeather = (coordinates) => axios.get(getDailyWeatherApi(coordinates));
