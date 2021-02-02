import './SearchBar.scss';

import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useStore } from 'react-redux';
import { asyncSearchCity } from '../../store/sagas/actions/asyncActionCreator';
import classNames from 'classnames';
import { clearSearchCity } from '../../store/actions/actionCreator';
const mapStateToProps = (state) => ({
  cityList: state.search.searchResponseList,
});

const SearchBar = (props) => {
  const { cityList } = props;
  const [searchText, setSearchText] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const store = useStore();

  // useEffect(async () => {
  //   await store.dispatch(asyncSearchCity(searchText));
  //   console.log(store.getState());
  // }, [dispatch, searchText]);

  const handleTextChange = (e) => {
    setSearchText(e.target.value);
    store.dispatch(asyncSearchCity(e.target.value));
  };

  const handleInputFocus = () => setIsFocus(true);

  const handleInputNoFocus = () => {
    setIsFocus(false);
    setSearchText('');
    setTimeout(() => {
      store.dispatch(clearSearchCity());
    }, 100);
  };

  const handleClickCityList = (e) => {
    console.log(e.target.getAttribute('data-id'));
  };

  return (
    <div className={classNames('search-bar', isFocus ? 'search-bar--stroke' : '')}>
      <label htmlFor="search-city" />
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search a location..."
        value={searchText}
        onChange={handleTextChange}
        onFocus={handleInputFocus}
        onBlur={handleInputNoFocus}
      />
      <ul className={classNames('search-bar__list', isFocus ? 'show' : 'hidden')}>
        {cityList.length > 0 &&
          cityList.map((item, index) => {
            return (
              <li data-id={index} key={'location:' + index} onClick={handleClickCityList}>
                {item.location}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(SearchBar);
