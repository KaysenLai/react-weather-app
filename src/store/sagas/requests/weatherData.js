import axios from "axios";
import { getCurrentWeatherApi } from "../../../api/api";

export const requestCurrentWeather = (coordinates) => {
  const requestUrl = getCurrentWeatherApi(coordinates);
  return axios.get(requestUrl);
};
