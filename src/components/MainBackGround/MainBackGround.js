import React from 'react';
import { connect } from 'react-redux';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';
import './MainBackGround.scss';
import { ColorExtractor } from 'react-color-extractor';

const mapStateToProps = (state) => ({
  fullImage: state.images.currentImages.mainImage.urls.full,
  thumbnail: state.images.currentImages.mainImage.urls.small,
});

const MainBackGround = (props) => {
  const getColors = (color) => {
    console.log(color);
  };
  const { fullImage, thumbnail } = props;
  return (
    <div className="main-background">
      <div className="main-background__mask" />
      <ProgressiveImage className="main-background" src={fullImage} thumbnailSrc={thumbnail} />
      <ColorExtractor getColors={getColors}>
        <img src="https://i.imgur.com/OCyjHNF.jpg" style={{ display: 'none' }} alt="color-extractor" />
      </ColorExtractor>
    </div>
  );
};

export default connect(mapStateToProps)(MainBackGround);
