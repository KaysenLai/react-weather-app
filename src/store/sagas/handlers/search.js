import { REQUEST_SEARCH_CITY } from '../asyncActionTypes';
import { call, put } from 'redux-saga/effects';
import { storeSearchCity } from '../../actions/actionCreator';
import { requestSearchCity } from '../requests/search';
import { convertLocation } from '../utils/untility';

export function* asyncHandleSearch(action) {
  if (action.type === REQUEST_SEARCH_CITY) {
    try {
      const searchCityResponse = yield call(requestSearchCity, 'syd');
      console.log(parseSearchCity(searchCityResponse));
      yield put(storeSearchCity(parseSearchCity(searchCityResponse)));
    } catch (e) {
      console.log(e);
    }
  }
}

const parseSearchCity = (searchCityResponse) => {
  const places = searchCityResponse.data.features;
  return places.map((item) => {
    return {
      cityName: item.text,
      coordinates: convertLocation(item.geometry.coordinates),
      location: item.place_name,
    };
  });
};
