import React from 'react';
import { connect } from 'react-redux';
import ProgressiveImage from 'react-progressive-bg-image';
import './MainBackGround.scss';

const mapStateToProps = (state) => {
  return {
    regularSizeImg: state.images.currentImages.mainImage.urls.full,
    smallSizeImg: state.images.currentImages.mainImage.urls.small,
  };
};

const MainBackGround = (props) => {
  const { regularSizeImg, smallSizeImg } = props;
  return (
    <div className="main-background">
      <div className="main-background__mask" />
      <ProgressiveImage src={regularSizeImg} placeholder={smallSizeImg} style={{}} />
    </div>
  );
};

export default connect(mapStateToProps)(MainBackGround);
