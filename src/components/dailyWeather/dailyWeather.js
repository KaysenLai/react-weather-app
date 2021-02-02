import './dailyWeather.scss';

import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  primaryColor: state.theme.primaryColor,
  user: state.user,
});

const DailyWeather = (props) => {
  const { primaryColor } = props;
  return <div className="daily-weather"></div>;
};

export default connect(mapStateToProps)(DailyWeather);
