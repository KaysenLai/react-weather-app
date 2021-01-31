import * as actions from '../actions/actionTypes';
import { STORE_CURRENT_WEATHER } from '../actions/actionTypes';

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
};

const initialState = {
  homePageWeather: defaultWeatherState,
  firstSaveBoxWeather: undefined,
  secondSaveBoxWeather: undefined,
  exchangeWeatherCache: undefined,
};

// Return the state
export default (state = initialState, action) => {
  if (action.type === STORE_CURRENT_WEATHER) {
    console.log(action.payload);
    return { ...state, homePageWeather: action.payload };
  }
  return state;
};
