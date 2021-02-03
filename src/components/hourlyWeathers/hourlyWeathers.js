import './hourlyWeathers.scss';

import React from 'react';
import { connect } from 'react-redux';
import HourlyWeather from '../hourlyWeather/hourlyWeather';

const mapStateToProps = (state) => ({
  hourlyForecast: state.weather.homePageWeather.hourlyForecast,
  cityName: state.search.clickedCity.cityName,
  text: state.weather.homePageWeather.text,
});

const HourlyWeathers = (props) => {
  const { text, cityName, hourlyForecast } = props;
  return (
    <div className="hourly-weathers">
      <h2>Hourly Forecast for {cityName}</h2>
      <ul className="hourly-weathers__card-wrap">
        {hourlyForecast.map(
          (item, index) =>
            index <= 5 && (
              <li key={'hourlyWeather:' + index}>
                <HourlyWeather title={text} temp={item.temp} icon={item.icon} time={item.time} />
              </li>
            ),
        )}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(HourlyWeathers);
