import './dailyWeathers.scss';

import React from 'react';
import { connect } from 'react-redux';
import DailyWeather from '../dailyWeather/dailyWeather';

const mapStateToProps = (state) => ({
  primaryColor: state.theme.primaryColor,
  user: state.user,
});

const DailyWeathers = (props) => {
  const { primaryColor } = props;
  return (
    <div className="daily-weathers">
      <h2>Daily Forecast for xx</h2>
      <div className="daily-weathers__card-wrap">
        <DailyWeather />
        <DailyWeather />
        <DailyWeather />
        <DailyWeather />
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(DailyWeathers);
