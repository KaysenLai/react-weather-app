import axios from 'axios';
import { searchCityApi } from '../../../api/api';

export const requestSearchCity = (place) => {
  const requestUrl = searchCityApi(place);
  return axios.get(requestUrl);
};
