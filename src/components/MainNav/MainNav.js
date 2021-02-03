import React from 'react';
import { connect } from 'react-redux';
import './MainNav.scss';
import SearchBar from '../SearchBar/SearchBar';
import classnames from 'classnames';

const mapStateToProps = (state) => ({
  primaryColor: state.theme.primaryColor,
});

const MainNav = (props) => {
  const { primaryColor } = props;
  const style = { backgroundColor: primaryColor };
  return (
    <nav className={classnames('main-nav', 'bg--color-ease')} style={style}>
      <div className="main-nav__container">
        <h2>Scenery℃</h2>
        <SearchBar />
      </div>
    </nav>
  );
};

export default connect(mapStateToProps)(MainNav);
