import React from 'react';
import './sceneryCard.scss';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  primaryColor: state.theme.primaryColor,
  user: state.user,
});

const SceneryCard = (props) => {
  const { primaryColor } = props;
  return <div className="scenery-card">{primaryColor}</div>;
};

export default connect(mapStateToProps)(SceneryCard);
