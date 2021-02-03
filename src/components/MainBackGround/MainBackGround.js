import React from 'react';
import { connect, useStore } from 'react-redux';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';
import './MainBackGround.scss';
import { ColorExtractor } from 'react-color-extractor';
import { storeThemeColor } from '../../store/actions/actionCreator';

const mapStateToProps = (state) => ({
  fullImage: state.images.currentImages.mainImage.urls.full,
  smallImage: state.images.currentImages.mainImage.urls.small,
});

const MainBackGround = (props) => {
  const store = useStore();
  const getColors = (colors) => {
    store.dispatch(storeThemeColor(colors));
  };
  const { fullImage, smallImage } = props;

  return (
    <div className="main-background">
      <div className="main-background__mask" />
      <ProgressiveImage className="main-background" src={fullImage} thumbnailSrc={smallImage} />
      <ColorExtractor getColors={getColors}>
        <img src={smallImage} style={{ display: 'none' }} alt="color-extractor" />
      </ColorExtractor>
    </div>
  );
};

export default connect(mapStateToProps)(MainBackGround);
