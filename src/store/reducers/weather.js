import * as actions from '../actions/actionTypes';
import { STORE_CURRENT_WEATHER, STORE_DAILY_WEATHER, STORE_HOURLY_WEATHER } from '../actions/actionTypes';

// const defaultWeatherState = {
//   currentTemp: undefined,
//   currentWeatherText: undefined,
//   iconCode: undefined,
//   humidity: undefined,
//   windDirection: undefined,
//   windSpeed: undefined,
// }

const defaultWeatherState = {
  temp: undefined,
  text: undefined,
  icon: undefined,
  humidity: undefined,
  windDir: undefined,
  windSpeed: undefined,
  hourlyForecast: undefined,
};

const initialState = {
  homePageWeather: defaultWeatherState,
  firstSaveBoxWeather: undefined,
  secondSaveBoxWeather: undefined,
  exchangeWeatherCache: undefined,
};

// Return the state
export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_CURRENT_WEATHER:
      return { ...state, homePageWeather: { ...state.homePageWeather, ...action.payload } };
    case STORE_HOURLY_WEATHER:
      return { ...state, homePageWeather: { ...state.homePageWeather, hourlyForecast: action.payload } };
    case STORE_DAILY_WEATHER:
      return { ...state, homePageWeather: { ...state.homePageWeather, dailyForecast: action.payload } };
    default:
      return state;
  }
};
