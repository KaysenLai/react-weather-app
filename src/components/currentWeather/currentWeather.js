import './currentWeather.scss';

import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

const mapStateToProps = (state) => ({
  primaryColor: state.theme.primaryColor,
  temp: state.weather.homePageWeather.temp,
  text: state.weather.homePageWeather.temp,
  icon: state.weather.homePageWeather.icon,
  humidity: state.weather.homePageWeather.humidity,
  windDir: state.weather.homePageWeather.windDir,
  windSpeed: state.weather.homePageWeather.windSpeed,
  location: 'Plaza, Miranda, Venezuela',
});

const CurrentWeather = (props) => {
  const { primaryColor, temp, text, icon, humidity, windDir, windSpeed, location } = props;
  console.log(props);
  return (
    <div className={classnames('current-weather', 'bg--color-ease')} style={{ backgroundColor: primaryColor }}>
      <div className="current-weather__text">
        <i className="wi wi-night-sleet" />
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(CurrentWeather);
