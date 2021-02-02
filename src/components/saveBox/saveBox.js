import './saveBox.scss';

import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  primaryColor: state.theme.primaryColor,
  user: state.user,
});

const SaveBox = (props) => {
  const { primaryColor } = props;
  return <div className="save-box">{primaryColor}</div>;
};

export default connect(mapStateToProps)(SaveBox);
