import './saveBoxs.scss';

import React from 'react';
import { connect, useStore } from 'react-redux';
import SaveBox from '../saveBox/saveBox';
import { setSavaBoxImg, setSaveboxWeather } from '../../store/actions/actionCreator';

const mapStateToProps = (state) => ({
  firstSaveBoxWeather: state.weather.firstSaveBoxWeather,
  secondSaveBoxWeather: state.weather.secondSaveBoxWeather,
  firstSaveBoxImage: state.images.currentImages.firstSaveBoxImage,
  secondSaveBoxImage: state.images.currentImages.secondSaveBoxImage,
});

const SaveBoxs = (props) => {
  const { primaryColor, firstSaveBoxWeather, secondSaveBoxWeather, firstSaveBoxImage, secondSaveBoxImage } = props;
  const store = useStore();

  const handleClick = (saveBoxId) => {
    store.dispatch(setSavaBoxImg(saveBoxId));
    store.dispatch(setSaveboxWeather(saveBoxId));
  };

  return (
    <div className="save-boxs">
      <SaveBox dataId="1" weatherData={firstSaveBoxWeather} imageData={firstSaveBoxImage} handleClick={handleClick} />
      <SaveBox dataId="2" weatherData={secondSaveBoxWeather} imageData={secondSaveBoxImage} handleClick={handleClick} />
    </div>
  );
};

export default connect(mapStateToProps)(SaveBoxs);
