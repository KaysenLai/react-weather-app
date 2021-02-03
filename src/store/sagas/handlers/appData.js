import { REQUEST_ALL_DATA } from '../actions/asyncActionTypes';
import { call, put, select } from 'redux-saga/effects';
import { requestSearchCity } from '../requests/search';
import { storeSearchCity } from '../../actions/actionCreator';
import { asyncRequestCurrentWeather, asyncRequestHourlyWeather } from '../actions/asyncActionCreator';

export function* asyncHandleAppdata(action) {
  if (action.type === REQUEST_ALL_DATA) {
    try {
      const coordinates = yield select(selectCoordinates);
      yield put(asyncRequestCurrentWeather(coordinates));
      yield put(asyncRequestHourlyWeather(coordinates));
      yield put(asyncRequestCurrentWeather(coordinates));
      // yield put(storeSearchCity(parseSearchCity(searchCityResponse)));
    } catch (e) {
      console.log(e);
    }
  }
}

const selectCityName = (state) => state.search.clickedCity.cityName;
const selectCoordinates = (state) => state.search.clickedCity.coordinates;
