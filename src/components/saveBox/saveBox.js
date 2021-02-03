import './saveBox.scss';
import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { DownloadOutlined } from '@ant-design/icons';

const mapStateToProps = (state) => ({
  primaryColor: state.theme.primaryColor,
  user: state.user,
});

const SaveBox = (props) => {
  const { primaryColor, handleClick, dataId, weatherData, imageData } = props;
  const [isSaved, setIsSaved] = useState(false);

  // useMemo(() => {
  //     setIsSaved(false);
  // }, [isSaved]);
  const clickSaveBtn = () => {
    handleClick(dataId);
    setIsSaved(true);
    console.log(weatherData);
  };

  return (
    <div className="save-box">
      <div className="save-box__dashed-line" onClick={clickSaveBtn}>
        <DownloadOutlined />
        <p>Save the current city</p>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(SaveBox);
