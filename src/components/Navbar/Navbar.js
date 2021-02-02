import React from 'react';
import { connect } from 'react-redux';
import './Navbar.scss';
const mapStateToProps = (state) => ({
  primaryColor: state.theme.primaryColor,
});

const Navbar = (props) => {
  const { primaryColor } = props;
  const style = { backgroundColor: primaryColor };
  return (
    <nav className="main-nav" style={style}>
      <div className="main-nav__container">
        <h2>Scenery℃</h2>
      </div>
    </nav>
  );
};

export default connect(mapStateToProps)(Navbar);