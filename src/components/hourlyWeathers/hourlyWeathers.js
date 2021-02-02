import './hourlyWeathers.scss';

import React from 'react';
import { connect } from 'react-redux';
import HourlyWeather from '../hourlyWeather/hourlyWeather';

const mapStateToProps = (state) => ({
  primaryColor: state.theme.primaryColor,
  user: state.user,
});

const HourlyWeathers = (props) => {
  const { primaryColor } = props;
  return (
    <div className="hourly-weathers">
      <h2>Hourly Forecast for xx</h2>
      <ul className="hourly-weathers__card-wrap">
        <li>
          <HourlyWeather />
        </li>
        <li>
          <HourlyWeather />
        </li>
        <li>
          <HourlyWeather />
        </li>
        <li>
          <HourlyWeather />
        </li>
        <li>
          <HourlyWeather />
        </li>
        <li>
          <HourlyWeather />
        </li>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(HourlyWeathers);
