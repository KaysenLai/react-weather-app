import { combineReducers } from 'redux';
import weatherReducer from './weather';
import searchReducer from './search';

const reducers = combineReducers({
  weather: weatherReducer,
  search: searchReducer,
});

export default reducers;
