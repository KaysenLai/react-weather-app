import React, { useMemo, useState } from 'react';
import './ProgressiveImage.scss';

const omit = (obj, omitKey) =>
  Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key];
    }
    return result;
  }, {});

const ProgressiveImage = (props) => {
  const { className, src, thumbnailSrc, alt } = props;
  const [isFullImgLoaded, setIsFullImgLoaded] = useState(false);

  useMemo(() => {
    setIsFullImgLoaded(false);
  }, [src]);

  const filteredProps = omit(props, 'thumbnailSrc');
  return (
    <div className={className}>
      <img
        {...filteredProps}
        className="progressive-img"
        onLoad={() => {
          setIsFullImgLoaded(true);
        }}
        {...(isFullImgLoaded && { style: { opacity: '1' } })}
        src={src}
        alt={alt}
      />
      <img
        {...filteredProps}
        className="progressive-img-thumbnail"
        {...(isFullImgLoaded && { style: { opacity: '0' } })}
        src={thumbnailSrc}
        alt={alt}
      />
    </div>
  );
};

export default ProgressiveImage;
