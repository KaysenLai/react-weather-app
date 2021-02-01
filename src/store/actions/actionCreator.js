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

export const storeOneImg = (imgId) => ({
  type: actions.STORE_ONE_IMG,
  payload: imgId,
});

export const storeSearchImg = (cityName) => ({
  type: actions.STORE_SEARCH_IMG,
  payload: cityName,
});
