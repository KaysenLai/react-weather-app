import './hourlyWeather.scss';

import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { getWeatherIcon } from '../../utils/getWeatherICon';
import moment from 'moment-timezone';

const mapStateToProps = (state) => ({
  primaryColor: state.theme.primaryColor,
});

const HourlyWeather = (props) => {
  const { primaryColor, temp, icon, time } = props;
  const hourMinTime = moment(time).format('HH:mm');

  return (
    <div className="hourly-weather">
      <div className="hourly-weather__temp">{temp + '°'}</div>
      <i
        title="ddd"
        className={classnames('hourly-weather__icon', getWeatherIcon(icon))}
        style={{ color: primaryColor }}
      />
      <div className="hourly-weather__time">{hourMinTime}</div>
    </div>
  );
};

export default connect(mapStateToProps)(HourlyWeather);
