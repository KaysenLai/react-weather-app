import './currentWeather.scss';

import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  primaryColor: state.theme.primaryColor,
  user: state.user,
});

const CurrentWeather = (props) => {
  const { primaryColor } = props;
  return <div>{primaryColor}</div>;
};

export default connect(mapStateToProps)(CurrentWeather);
