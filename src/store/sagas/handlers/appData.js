import { REQUEST_ALL_DATA } from '../actions/asyncActionTypes';
import { call, put, select } from 'redux-saga/effects';
import {
  asyncRequestCurrentWeather,
  asyncRequestDailyWeather,
  asyncRequestHourlyWeather,
  asyncRequestOneImg,
  asyncRequestSearchImg,
} from '../actions/asyncActionCreator';

export function* asyncHandleAppdata(action) {
  if (action.type === REQUEST_ALL_DATA) {
    try {
      const coordinates = yield select(selectCoordinates);
      const presetImage = yield select(selectPresetImage);
      if (presetImage === '') {
        const cityName = yield select(selectCityName);
        yield put(asyncRequestSearchImg(cityName));
      } else {
        yield put(asyncRequestOneImg(presetImage));
      }
      yield put(asyncRequestCurrentWeather(coordinates));
      yield put(asyncRequestHourlyWeather(coordinates));
      yield put(asyncRequestDailyWeather(coordinates));
    } catch (e) {
      console.log(e);
    }
  }
}

const selectCityName = (state) => state.search.clickedCity.cityName;
const selectPresetImage = (state) => state.search.clickedCity.presetImage;
const selectCoordinates = (state) => state.search.clickedCity.coordinates;
