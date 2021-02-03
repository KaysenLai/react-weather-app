import * as actions from '../actions/actionTypes';
import { STORE_CURRENT_WEATHER, STORE_DAILY_WEATHER, STORE_HOURLY_WEATHER } from '../actions/actionTypes';

const defaultDailyForecast = [
  {
    tempMax: '3',
    tempMin: '-10',
    iconDay: '100',
    date: '2021-02-01',
    textDay: 'Sunny',
  },
  {
    tempMax: '3',
    tempMin: '-10',
    iconDay: '100',
    date: '2021-02-01',
    textDay: 'Sunny',
  },
  {
    tempMax: '3',
    tempMin: '-10',
    iconDay: '100',
    date: '2021-02-01',
    textDay: 'Sunny',
  },
  {
    tempMax: '3',
    tempMin: '-10',
    iconDay: '100',
    date: '2021-02-01',
    textDay: 'Sunny',
  },
];

const defaultHourlyForecast = [
  {
    temp: '0',
    icon: '150',
    time: '2021-02-02T02:00+08:00',
    text: 'Sunny',
  },
  {
    temp: '0',
    icon: '150',
    time: '2021-02-02T02:00+08:00',
    text: 'Sunny',
  },
  {
    temp: '0',
    icon: '150',
    time: '2021-02-02T02:00+08:00',
    text: 'Sunny',
  },
  {
    temp: '0',
    icon: '150',
    time: '2021-02-02T02:00+08:00',
    text: 'Sunny',
  },
  {
    temp: '0',
    icon: '150',
    time: '2021-02-02T02:00+08:00',
    text: 'Sunny',
  },
  {
    temp: '0',
    icon: '150',
    time: '2021-02-02T02:00+08:00',
    text: 'Sunny',
  },
  {
    temp: '0',
    icon: '150',
    time: '2021-02-02T02:00+08:00',
    text: 'Sunny',
  },
];

const defaultWeatherState = {
  temp: '-4',
  text: 'Sunny',
  icon: '150',
  humidity: '16',
  windDir: 'North',
  windSpeed: '28',
  hourlyForecast: defaultHourlyForecast,
  dailyForecast: defaultDailyForecast,
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
