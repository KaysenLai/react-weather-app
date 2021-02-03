import { CLEAT_SEARCH_CITY, STORE_CLICKED_CITY, STORE_SEARCH_CITY } from '../actions/actionTypes';

const initialState = { searchResponseList: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_SEARCH_CITY:
      return { ...state, searchResponseList: action.payload };
    case STORE_CLICKED_CITY:
      return { ...state, clickedCity: action.payload };
    case CLEAT_SEARCH_CITY:
      return { ...state, searchResponseList: [] };
    default:
      return state;
  }
};
