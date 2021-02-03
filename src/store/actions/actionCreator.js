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

export const storeClickedCity = (clickedCity) => ({
  type: actions.STORE_CLICKED_CITY,
  payload: clickedCity,
});

export const clearSearchCity = () => ({
  type: actions.CLEAT_SEARCH_CITY,
});

export const storeOneImg = (imgId) => ({
  type: actions.STORE_ONE_IMG,
  payload: imgId,
});

export const storeSearchImg = (cityName) => ({
  type: actions.STORE_SEARCH_IMG,
  payload: cityName,
});

export const setMainImg = (imgData) => ({
  type: actions.SET_MAIN_IMG,
  payload: imgData,
});

export const setSavaBox1Img = (imgData) => ({
  type: actions.SET_SAVEBOX_1_IMG,
  payload: imgData,
});

export const setSavaBox2Img = (imgData) => ({
  type: actions.SET_SAVEBOX_2_IMG,
  payload: imgData,
});

export const storeThemeColor = (colors) => ({
  type: actions.STORE_THEME_COLOR,
  payload: colors,
});
