import React, { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import {
  REQUEST_CURRENT_WEATHER,
  REQUEST_DAILY_WEATHER,
  REQUEST_HOURLY_WEATHER,
  REQUEST_ONE_IMG,
  REQUEST_SEARCH_CITY,
} from './store/sagas/actions/asyncActionTypes';

import MainNav from './components/MainNav/MainNav';
import Weather from './pages/Weather/Weather';
import { asyncRequestCurrentWeather, asyncRequestSearchImg } from './store/sagas/actions/asyncActionCreator';

function App() {
  const store = useStore();
  const dispatch = useDispatch();
  const action = (type) => store.dispatch({ type });

  useEffect(() => {
    // store.dispatch()
    // action(REQUEST_CURRENT_WEATHER);
    // action(REQUEST_HOURLY_WEATHER);
    // action(REQUEST_DAILY_WEATHER);
    // action(REQUEST_SEARCH_CITY);
    // action(REQUEST_ONE_IMG);
    // dispatch(asyncRequestSearchImg('brisbane'));
  }, [dispatch]);

  return (
    <div>
      <MainNav />
      <Weather />
    </div>
  );
}

export default App;
