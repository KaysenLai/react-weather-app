import './dailyWeathers.scss';

import React from 'react';
import { connect } from 'react-redux';
import DailyWeather from '../dailyWeather/dailyWeather';
import HourlyWeather from '../dailyWeather/dailyWeather';

const mapStateToProps = (state) => ({
  cityName: state.search.clickedCity.cityName,
  dailyForecast: state.weather.homePageWeather.dailyForecast,
});

const DailyWeathers = (props) => {
  const { cityName, text, dailyForecast } = props;
  return (
    <div className="daily-weathers">
      <h2>Daily Forecast for {cityName}</h2>
      <div className="daily-weathers__card-wrap">
        {dailyForecast.map(
          (item, index) =>
            index <= 3 && (
              <DailyWeather
                key={'daily-weather' + index}
                number={index}
                tempMax={item.tempMax}
                tempMin={item.tempMin}
                icon={item.iconDay}
                date={item.date}
                textDay={item.textDay}
              />
            ),
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(DailyWeathers);
