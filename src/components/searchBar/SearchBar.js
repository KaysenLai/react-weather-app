import './SearchBar.scss';

import React, { useState } from 'react';
import { connect, useStore } from 'react-redux';
import { asyncRequestAllData, asyncRequestSearchCity } from '../../store/sagas/actions/asyncActionCreator';
import classNames from 'classnames';
import { clearSearchCity, storeClickedCity } from '../../store/actions/actionCreator';
const mapStateToProps = (state) => ({
  cityList: state.search.searchResponseList,
});

const SearchBar = (props) => {
  const { cityList } = props;
  const [searchText, setSearchText] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const store = useStore();

  const handleTextChange = (e) => {
    setSearchText(e.target.value);
    if (!isSearching) {
      setIsSearching(true);
      setTimeout(async () => {
        await store.dispatch(asyncRequestSearchCity(searchText));
        setIsSearching(false);
      }, 500);
    }
  };

  const handleInputFocus = () => setIsFocus(true);

  const handleInputNoFocus = () => {
    setIsFocus(false);
    setSearchText('');
    setTimeout(() => {
      store.dispatch(clearSearchCity());
    }, 200);
  };

  const handleClickCityList = (e) => {
    const clickedCity = cityList[e.target.getAttribute('data-id')];
    store.dispatch(storeClickedCity(clickedCity));
    store.dispatch(asyncRequestAllData());
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
