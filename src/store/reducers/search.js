import { CLEAT_SEARCH_CITY, STORE_CLICKED_CITY, STORE_SEARCH_CITY } from '../actions/actionTypes';

const initialState = {
  searchResponseList: [],
  clickedCity: {
    cityName: 'Brisbane',
    location: 'Brisbane, Queensland, Australia',
    coordinates: '153.0235,-27.469',
    presetImage: 'LyXjaTNxUcE',
  },
};

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
