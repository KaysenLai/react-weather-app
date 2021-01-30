import { combineReducers } from "redux";
import counterReducer from "./counter";
import userReducer from "./user";

const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default reducers;
