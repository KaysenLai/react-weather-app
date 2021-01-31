import { takeLatest } from 'redux-saga/effects';
import { asyncHandleWeather } from './handlers/weather';
import { REQUEST_CURRENT_WEATHER, REQUEST_DAILY_WEATHER, REQUEST_HOURLY_WEATHER } from './asyncActionTypes';

// 在后台监听
export function* watcherSaga() {
  yield takeLatest(REQUEST_CURRENT_WEATHER, asyncHandleWeather);
  yield takeLatest(REQUEST_HOURLY_WEATHER, asyncHandleWeather);
  yield takeLatest(REQUEST_DAILY_WEATHER, asyncHandleWeather);
}
