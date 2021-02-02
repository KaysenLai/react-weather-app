import { call, put } from 'redux-saga/effects';
import { requestCurrentWeather, requestDailyWeather, requestHourlyWeather } from '../requests/weather';
import {
  storeCurrentWeather,
  storeDailyWeather,
  storeHourlyWeather,
  storeOneImg,
  storeSearchImg,
} from '../../actions/actionCreator';
import { REQUEST_ONE_IMG, REQUEST_SEARCH_IMG } from '../asyncActionTypes';
import { requestOneImg, requestSearchImg } from '../requests/image';

export function* asyncHandleImage(action) {
  switch (action.type) {
    case REQUEST_ONE_IMG: {
      try {
        const oneImgResponse = yield call(requestOneImg, 'LyXjaTNxUcE');
        yield put(storeOneImg(parseOneImgResponse(oneImgResponse)));
      } catch (e) {
        console.log(e);
      }
      break;
    }
    // case REQUEST_SEARCH_IMG: {
    //   try {
    //     const searchImgResponse = yield call(requestSearchImg, '116.41,39.92');
    //     yield put(storeSearchImg(parseSearchImg(searchImgResponse)));
    //   } catch (e) {
    //     console.log(e);
    //   }
    //   break;
    // }
    default:
      return;
  }
}

function parseOneImgResponse(oneImgResponse) {
  const { urls, links } = oneImgResponse.data;
  const properSizeFull = urls.full + '&w=1920';
  const properSizeUrls = { ...urls, full: properSizeFull };
  return { urls: properSizeUrls, links };
}

// function parseSearchImg(dailyWeatherResponse) {
//   const dailyForecasts = dailyWeatherResponse.data.daily;
//   return dailyForecasts.map((item) => {
//     return {
//       tempMax: item.tempMax,
//       tempMin: item.tempMin,
//       iconDay: item.iconDay,
//       date: item.fxDate,
//       textDay: translateWeatherText(item.textDay),
//     };
//   });
// }
