import { STORE_ONE_IMG, STORE_SEARCH_IMG } from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case STORE_ONE_IMG:
      return { ...state, currentImages: { ...state.currentImages, mainImage: action.payload } };
    case STORE_SEARCH_IMG:
      return { ...state, homePageWeather: { ...state.homePageWeather, hourlyForecast: action.payload } };
    default:
      return state;
  }
};
