import React, { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import {
  REQUEST_CURRENT_WEATHER,
  REQUEST_DAILY_WEATHER,
  REQUEST_HOURLY_WEATHER,
  REQUEST_ONE_IMG,
  REQUEST_SEARCH_CITY,
} from './store/sagas/asyncActionTypes';
import Navbar from './components/Navbar/Navbar';
import ProgressiveImage from './components/ProgressiveImage/ProgressiveImage';
import MainBackGround from './components/MainBackGround/MainBackGround';

function App() {
  const store = useStore();
  const dispatch = useDispatch();
  const action = (type) => store.dispatch({ type });

  useEffect(() => {
    action(REQUEST_CURRENT_WEATHER);
    action(REQUEST_HOURLY_WEATHER);
    action(REQUEST_DAILY_WEATHER);
    action(REQUEST_SEARCH_CITY);
    action(REQUEST_ONE_IMG);
  }, [dispatch]);

  return (
    <div>
      <MainBackGround />
    </div>
  );
}

export default App;
