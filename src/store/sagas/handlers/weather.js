import { call, put } from 'redux-saga/effects';
import { requestCurrentWeather, requestDailyWeather, requestHourlyWeather } from '../requests/weather';
import { storeCurrentWeather, storeDailyWeather, storeHourlyWeather } from '../../actions/actionCreator';
import { translateWeatherText, translateWinDir } from '../../../utils/translate';
import { REQUEST_CURRENT_WEATHER, REQUEST_DAILY_WEATHER, REQUEST_HOURLY_WEATHER } from '../actions/asyncActionTypes';

export function* asyncHandleWeather(action) {
  switch (action.type) {
    case REQUEST_CURRENT_WEATHER: {
      try {
        const currentWeatherResponse = yield call(requestCurrentWeather, action.payload);
        yield put(storeCurrentWeather(parseCurrentData(currentWeatherResponse)));
      } catch (e) {
        console.log(e);
      }
      break;
    }
    case REQUEST_HOURLY_WEATHER: {
      try {
        const hourlyWeatherResponse = yield call(requestHourlyWeather, action.payload);
        yield put(storeHourlyWeather(parseHourlyData(hourlyWeatherResponse)));
      } catch (e) {
        console.log(e);
      }
      break;
    }

    case REQUEST_DAILY_WEATHER: {
      try {
        const dailyWeatherResponse = yield call(requestDailyWeather, action.payload);
        yield put(storeDailyWeather(parseDailyData(dailyWeatherResponse)));
      } catch (e) {
        console.log(e);
      }
      break;
    }
    default:
      return;
  }
}

function parseCurrentData(currentWeatherResponse) {
  const { temp, text, icon, humidity, windDir, windSpeed } = currentWeatherResponse.data.now;
  return { temp, text: translateWeatherText(text), icon, humidity, windDir: translateWinDir(windDir), windSpeed };
}

function parseHourlyData(hourlyWeatherResponse) {
  const hourlyForecasts = hourlyWeatherResponse.data.hourly;
  const filterForecast = hourlyForecasts.filter((item, index) => index % 2 === 0);
  return filterForecast.map((item) => {
    return { temp: item.temp, icon: item.icon, time: item.fxTime, text: translateWeatherText(item.text) };
  });
}

function parseDailyData(dailyWeatherResponse) {
  const dailyForecasts = dailyWeatherResponse.data.daily;
  return dailyForecasts.map((item) => {
    return {
      tempMax: item.tempMax,
      tempMin: item.tempMin,
      iconDay: item.iconDay,
      date: item.fxDate,
      textDay: translateWeatherText(item.textDay),
    };
  });
}
