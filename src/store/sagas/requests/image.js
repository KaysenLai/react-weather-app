import axios from 'axios';
import { getOneImgApi, getSearchImgApi } from '../../../api/api';

export const requestOneImg = (imgId) => {
  const requestUrl = getOneImgApi(imgId);
  return axios.get(requestUrl);
};

export const requestSearchImg = (cityName) => {
  const requestUrl = getSearchImgApi(cityName);
  return axios.get(requestUrl);
};
