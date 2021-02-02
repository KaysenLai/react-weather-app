import './hourlyWeather.scss';

import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  primaryColor: state.theme.primaryColor,
  user: state.user,
});

const HourlyWeather = (props) => {
  const { primaryColor } = props;
  return <div className="hourly-weather"></div>;
};

export default connect(mapStateToProps)(HourlyWeather);
