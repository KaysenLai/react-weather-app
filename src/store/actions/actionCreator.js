import * as actions from './actionTypes';

export const storeCurrentWeather = (currentWeather) => ({
  type: actions.STORE_CURRENT_WEATHER,
  payload: currentWeather,
});

export const storeHourlyWeather = (hourlyWeather) => ({
  type: actions.STORE_HOURLY_WEATHER,
  payload: hourlyWeather,
});

export const storeDailyWeather = (dailyWeather) => ({
  type: actions.STORE_DAILY_WEATHER,
  payload: dailyWeather,
});

export const storeSearchCity = (searchedCities) => ({
  type: actions.STORE_SEARCH_CITY,
  payload: searchedCities,
});

export const storeSelectedCity = (selectedCity) => ({
  type: actions.STORE_SELECTED_CITY,
  payload: selectedCity,
});
