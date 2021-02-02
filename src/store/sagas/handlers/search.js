import { REQUEST_SEARCH_CITY } from '../actions/asyncActionTypes';
import { call, put } from 'redux-saga/effects';
import { storeSearchCity } from '../../actions/actionCreator';
import { requestSearchCity } from '../requests/search';
import { convertLocation } from '../utils/untility';
import { getPresetImages } from '../utils/presetImages';

export function* asyncHandleSearch(action) {
  if (action.type === REQUEST_SEARCH_CITY) {
    const location = action.payload;
    try {
      if (!location) return;
      const searchCityResponse = yield call(requestSearchCity, action.payload);
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
      presetImage: getPresetImages(item.text),
    };
  });
};
