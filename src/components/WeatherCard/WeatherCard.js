import React from 'react';
import './WeatherCard.scss';
import CurrentWeather from '../currentWeather/currentWeather';

const WeatherCard = () => {
  return (
    <main className="weather-card">
      <div className="weather-card__content">
        <CurrentWeather />
      </div>
      <div className="weather-card__sidebar"></div>
    </main>
  );
};

export default WeatherCard;
