import { call, put } from 'redux-saga/effects';
import { requestCurrentWeather, requestDailyWeather, requestHourlyWeather } from '../requests/weather';
import { storeCurrentWeather } from '../../actions/actionCreator';
import { translateWeatherText, translateWinDir } from './untility';
import { REQUEST_CURRENT_WEATHER, REQUEST_DAILY_WEATHER, REQUEST_HOURLY_WEATHER } from '../asyncActionTypes';

const fakeCoordinate = '116.41,39.92';

export function* asyncHandleWeather(action) {
  switch (action.type) {
    case REQUEST_CURRENT_WEATHER: {
      try {
        const currentWeatherResponse = yield call(requestCurrentWeather, '116.41,39.92');
        yield put(storeCurrentWeather(parseCurrentData(currentWeatherResponse)));
      } catch (e) {
        console.log(e);
      }
      break;
    }

    case REQUEST_HOURLY_WEATHER: {
      try {
        const hourlyWeatherResponse = yield call(requestHourlyWeather, '116.41,39.92');
        console.log(parseHourlyData(hourlyWeatherResponse));
        yield put(storeCurrentWeather(parseHourlyData(hourlyWeatherResponse)));
      } catch (e) {
        console.log(e);
      }
      break;
    }

    case REQUEST_DAILY_WEATHER: {
      try {
        const dailyWeatherResponse = yield call(requestHourlyWeather, '116.41,39.92');
        yield put(storeCurrentWeather(parseCurrentData(dailyWeatherResponse)));
      } catch (e) {
        console.log(e);
      }
      break;
    }
    default:
      return;
  }
}

function convertLocation(arr) {
  return arr[0] + ',' + arr[1];
}

function parseCurrentData(currentWeatherResponse) {
  const { temp, text, icon, humidity, windDir, windSpeed } = currentWeatherResponse.data.now;
  return { temp, text: translateWeatherText(text), icon, humidity, windDir: translateWinDir(windDir), windSpeed };
}

function parseHourlyData(hourlyWeatherResponse) {
  const hourlyForecasts = hourlyWeatherResponse.data.hourly;
  return hourlyForecasts.map((item) => {
    return { raindrop: item.pop, icon: item.icon, time: item.fxTime, text: translateWeatherText(item.text) };
  });
}
