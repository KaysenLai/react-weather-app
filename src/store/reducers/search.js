import { STORE_SEARCH_CITY, STORE_SELECTED_CITY } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case STORE_SEARCH_CITY:
      return { ...state, searchResponseList: action.payload };
    case STORE_SELECTED_CITY:
      return { ...state, homePageWeather: { ...state.homePageWeather, hourlyForecast: action.payload } };
    default:
      return state;
  }
};
