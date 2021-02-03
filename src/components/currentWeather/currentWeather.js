import './currentWeather.scss';

import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { getWeatherIcon } from '../../utils/getWeatherICon';
import moment from 'moment-timezone';

const mapStateToProps = (state) => ({
  primaryColor: state.theme.primaryColor,
  temp: state.weather.homePageWeather.temp,
  text: state.weather.homePageWeather.text,
  icon: state.weather.homePageWeather.icon,
  humidity: state.weather.homePageWeather.humidity,
  windDir: state.weather.homePageWeather.windDir,
  windSpeed: state.weather.homePageWeather.windSpeed,
  location: state.search.clickedCity.location,
});

const CurrentWeather = (props) => {
  const { primaryColor, temp, text, icon, humidity, windDir, windSpeed, location } = props;
  const currentTime = moment().tz(moment.tz.guess()).format('hh:mm a z');

  return (
    <div className={classnames('current-weather', 'bg--color-ease')} style={{ backgroundColor: primaryColor }}>
      <div className="current-weather__text">
        <h3>{location}</h3>
        <p>{`As of ${currentTime}`}</p>
        <h4>{temp + '°'}</h4>

        <div className="current-weather__info-wrap">
          <span>{'Humidity: ' + humidity}</span>
          <span>{`Wind: ${windDir} ${windSpeed}mph`}</span>
        </div>
      </div>
      <div className="current-weather__icon-text">
        <i className={classnames('current-weather__icon', getWeatherIcon(icon))} />
        <h4 className="current-weather__weather-text">{text}</h4>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(CurrentWeather);
