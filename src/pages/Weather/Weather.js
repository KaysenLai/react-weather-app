import React from 'react';
import { connect } from 'react-redux';
import MainBackGround from '../../components/MainBackGround/MainBackGround';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

const Weather = (props) => {
  return (
    <div className="weather">
      <WeatherCard />
      <MainBackGround />
    </div>
  );
};

export default Weather;
