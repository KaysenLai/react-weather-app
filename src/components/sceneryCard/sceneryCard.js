import React from 'react';
import './sceneryCard.scss';
import { connect } from 'react-redux';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';

const mapStateToProps = (state) => ({
  smallImage: state.images.currentImages.mainImage.urls.regular,
  thumbnail: state.images.currentImages.mainImage.urls.small,
});

const SceneryCard = (props) => {
  const { primaryColor } = props;
  const { smallImage, thumbnail } = props;
  return (
    <div className="scenery-card">
      <ProgressiveImage className="scenery-card__img" src={smallImage} thumbnailSrc={thumbnail} />
    </div>
  );
};

export default connect(mapStateToProps)(SceneryCard);
