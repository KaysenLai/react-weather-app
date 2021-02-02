import './saveBoxs.scss';

import React from 'react';
import { connect } from 'react-redux';
import SaveBox from '../saveBox/saveBox';

const mapStateToProps = (state) => ({
  primaryColor: state.theme.primaryColor,
  user: state.user,
});

const SaveBoxs = (props) => {
  const { primaryColor } = props;
  return (
    <div className="save-boxs">
      <SaveBox />
      <SaveBox />
    </div>
  );
};

export default connect(mapStateToProps)(SaveBoxs);
