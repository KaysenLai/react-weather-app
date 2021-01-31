import { call, put } from "redux-saga/effects";

import { setUser } from "../../actions/actionCreator";
import { requestCurrentWeather } from "../requests/weatherData";

const fakeCoordinates = "116.41,39.92";

export function* handleGetUser(action) {
  try {
    const currentRes = yield call(requestCurrentWeather, fakeCoordinates);
    yield put(setUser(currentRes.data));
  } catch (e) {
    console.log(e);
  }
}

function convertLocation(arr) {
  return arr[0] + "," + arr[1];
}
