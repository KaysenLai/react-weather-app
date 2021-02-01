import { takeLatest } from 'redux-saga/effects';
import { asyncHandleWeather } from './handlers/weather';
import {
  REQUEST_CURRENT_WEATHER,
  REQUEST_DAILY_WEATHER,
  REQUEST_HOURLY_WEATHER,
  REQUEST_ONE_IMG,
  REQUEST_SEARCH_CITY,
  REQUEST_SEARCH_IMG,
} from './asyncActionTypes';
import { asyncHandleSearch } from './handlers/search';
import { asyncHandleImage } from './handlers/image';

export function* watcherSaga() {
  yield takeLatest(REQUEST_CURRENT_WEATHER, asyncHandleWeather);
  yield takeLatest(REQUEST_HOURLY_WEATHER, asyncHandleWeather);
  yield takeLatest(REQUEST_DAILY_WEATHER, asyncHandleWeather);
  yield takeLatest(REQUEST_SEARCH_CITY, asyncHandleSearch);
  yield takeLatest(REQUEST_ONE_IMG, asyncHandleImage);
  yield takeLatest(REQUEST_SEARCH_IMG, asyncHandleImage);
}
