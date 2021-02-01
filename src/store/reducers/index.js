import { combineReducers } from 'redux';
import weatherReducer from './weather';
import searchReducer from './search';
import imageReducer from './image';

const reducers = combineReducers({
  weather: weatherReducer,
  search: searchReducer,
  images: imageReducer,
});

export default reducers;
