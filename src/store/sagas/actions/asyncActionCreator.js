import * as actions from './asyncActionTypes';

export const asyncRequestCurrentWeather = (coordinates) => ({
  type: actions.REQUEST_CURRENT_WEATHER,
  payload: coordinates,
});

export const asyncRequestHourlyWeather = (coordinates) => ({
  type: actions.REQUEST_HOURLY_WEATHER,
  payload: coordinates,
});

export const asyncRequestDailyWeather = (coordinates) => ({
  type: actions.REQUEST_DAILY_WEATHER,
  payload: coordinates,
});

export const asyncRequestSearchCity = (location) => ({
  type: actions.REQUEST_SEARCH_CITY,
  payload: location,
});

export const asyncRequestOneImg = (imgID) => ({
  type: actions.REQUEST_ONE_IMG,
  payload: imgID,
});

export const asyncRequestSearchImg = (cityName) => ({
  type: actions.REQUEST_SEARCH_IMG,
  payload: cityName,
});

export const asyncRequestAllData = () => ({
  type: actions.REQUEST_ALL_DATA,
});
