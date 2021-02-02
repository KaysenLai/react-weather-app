import React from 'react';
import './WeatherCard.scss';
import CurrentWeather from '../currentWeather/currentWeather';
import SceneryCard from '../sceneryCard/sceneryCard';
import SaveBoxs from '../saveBoxs/saveBoxs';

const WeatherCard = () => {
  return (
    <main className="weather-card">
      <div className="weather-card__content">
        <CurrentWeather />
      </div>
      <div className="weather-card__sidebar">
        <SceneryCard />
        <SaveBoxs />
      </div>
    </main>
  );
};

export default WeatherCard;
