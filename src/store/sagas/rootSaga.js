import { takeLatest } from 'redux-saga/effects';
import { asyncHandleWeather } from './handlers/weather';
import {
  REQUEST_ALL_DATA,
  REQUEST_CURRENT_WEATHER,
  REQUEST_DAILY_WEATHER,
  REQUEST_HOURLY_WEATHER,
  REQUEST_ONE_IMG,
  REQUEST_SEARCH_CITY,
  REQUEST_SEARCH_IMG,
} from './actions/asyncActionTypes';
import { asyncHandleSearch } from './handlers/search';
import { asyncHandleImage } from './handlers/image';
import { asyncHandleAppdata } from './handlers/appData';

export function* watcherSaga() {
  yield takeLatest(REQUEST_CURRENT_WEATHER, asyncHandleWeather);
  yield takeLatest(REQUEST_HOURLY_WEATHER, asyncHandleWeather);
  yield takeLatest(REQUEST_DAILY_WEATHER, asyncHandleWeather);
  yield takeLatest(REQUEST_SEARCH_CITY, asyncHandleSearch);
  yield takeLatest(REQUEST_ONE_IMG, asyncHandleImage);
  yield takeLatest(REQUEST_SEARCH_IMG, asyncHandleImage);
  yield takeLatest(REQUEST_ALL_DATA, asyncHandleAppdata);
}
