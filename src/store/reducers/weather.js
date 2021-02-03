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
    raindrop: '0',
    icon: '150',
    time: '2021-02-02T02:00+08:00',
    text: 'Sunny',
  },
  {
    raindrop: '0',
    icon: '150',
    time: '2021-02-02T02:00+08:00',
    text: 'Sunny',
  },
  {
    raindrop: '0',
    icon: '150',
    time: '2021-02-02T02:00+08:00',
    text: 'Sunny',
  },
  {
    raindrop: '0',
    icon: '150',
    time: '2021-02-02T02:00+08:00',
    text: 'Sunny',
  },
  {
    raindrop: '0',
    icon: '150',
    time: '2021-02-02T02:00+08:00',
    text: 'Sunny',
  },
  {
    raindrop: '0',
    icon: '150',
    time: '2021-02-02T02:00+08:00',
    text: 'Sunny',
  },
  {
    raindrop: '0',
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

const ex = {
  homePageWeather: {
    temp: '-4',
    text: 'Sunny',
    icon: '150',
    humidity: '16',
    windDir: 'North',
    windSpeed: '28',
    hourlyForecast: [
      {
        raindrop: '0',
        icon: '150',
        time: '2021-02-02T02:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '150',
        time: '2021-02-02T03:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '150',
        time: '2021-02-02T04:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '150',
        time: '2021-02-02T05:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '150',
        time: '2021-02-02T06:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '150',
        time: '2021-02-02T07:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '100',
        time: '2021-02-02T08:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '100',
        time: '2021-02-02T09:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '100',
        time: '2021-02-02T10:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '100',
        time: '2021-02-02T11:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '100',
        time: '2021-02-02T12:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '100',
        time: '2021-02-02T13:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '100',
        time: '2021-02-02T14:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '100',
        time: '2021-02-02T15:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '100',
        time: '2021-02-02T16:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '100',
        time: '2021-02-02T17:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '150',
        time: '2021-02-02T18:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '150',
        time: '2021-02-02T19:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '150',
        time: '2021-02-02T20:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '150',
        time: '2021-02-02T21:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '150',
        time: '2021-02-02T22:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '150',
        time: '2021-02-02T23:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '150',
        time: '2021-02-03T00:00+08:00',
        text: 'Sunny',
      },
      {
        raindrop: '0',
        icon: '101',
        time: '2021-02-03T01:00+08:00',
        text: 'Cloudy',
      },
    ],
    dailyForecast: [
      {
        tempMax: '3',
        tempMin: '-10',
        iconDay: '100',
        date: '2021-02-01',
        textDay: 'Sunny',
      },
      {
        tempMax: '1',
        tempMin: '-9',
        iconDay: '100',
        date: '2021-02-02',
        textDay: 'Sunny',
      },
      {
        tempMax: '6',
        tempMin: '-8',
        iconDay: '101',
        date: '2021-02-03',
        textDay: 'Cloudy',
      },
      {
        tempMax: '8',
        tempMin: '-5',
        iconDay: '100',
        date: '2021-02-04',
        textDay: 'Sunny',
      },
      {
        tempMax: '10',
        tempMin: '-2',
        iconDay: '101',
        date: '2021-02-05',
        textDay: 'Cloudy',
      },
      {
        tempMax: '8',
        tempMin: '-5',
        iconDay: '101',
        date: '2021-02-06',
        textDay: 'Cloudy',
      },
      {
        tempMax: '6',
        tempMin: '-5',
        iconDay: '100',
        date: '2021-02-07',
        textDay: 'Sunny',
      },
    ],
  },
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
