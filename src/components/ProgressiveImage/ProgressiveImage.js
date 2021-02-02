import React, { useState } from 'react';
import './ProgressiveImage.scss';

const omit = (obj, omitKey) =>
  Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key];
    }
    return result;
  }, {});

const ProgressiveImage = (props) => {
  const [isFullImgLoaded, setIsFullImgLoaded] = useState(false);
  const { src, className, overlaySrc, alt } = props;

  const filteredProps = omit(props, 'overlaySrc');
  return (
    <div className={className}>
      <img
        {...filteredProps}
        className="progressive-img"
        onLoad={() => {
          setIsFullImgLoaded(true);
        }}
        src={src}
        alt={alt}
      />
      <img
        {...filteredProps}
        className="progressive-img-thumbnail"
        {...(isFullImgLoaded && { style: { opacity: '0' } })}
        src={overlaySrc}
        alt={alt}
      />
    </div>
  );
};

export default ProgressiveImage;
