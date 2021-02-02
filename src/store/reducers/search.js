import { CLEAT_SEARCH_CITY, STORE_SEARCH_CITY, STORE_SELECTED_CITY } from '../actions/actionTypes';

const initialState = { searchResponseList: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_SEARCH_CITY:
      return { ...state, searchResponseList: action.payload };
    case STORE_SELECTED_CITY:
      return { ...state, homePageWeather: { ...state.homePageWeather, hourlyForecast: action.payload } };
    case CLEAT_SEARCH_CITY:
      return { ...state, searchResponseList: [] };
    default:
      return state;
  }
};
