import { combineReducers } from 'redux';
import weatherReducer from './weather';
import searchReducer from './search';
import imageReducer from './image';
import themeReducer from './theme';

const reducers = combineReducers({
  weather: weatherReducer,
  search: searchReducer,
  images: imageReducer,
  theme: themeReducer,
});

export default reducers;
