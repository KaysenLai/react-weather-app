import { connect } from 'react-redux';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';
import './MainBackGround.scss';

const mapStateToProps = (state) => {
  return {
    fullImage: state.images.currentImages.mainImage.urls.full,
    thumbnail: state.images.currentImages.mainImage.urls.small,
  };
};

const MainBackGround = (props) => {
  const { fullImage, thumbnail } = props;
  return (
    <div className="main-background">
      <div className="main-background__mask" />
      <ProgressiveImage className="main-background" src={fullImage} thumbnailSrc={thumbnail} />
    </div>
  );
};

export default connect(mapStateToProps)(MainBackGround);
