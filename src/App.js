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
      {/*<Navbar />*/}
      <ProgressiveImage
        className={'cover'}
        alt={'woman'}
        overlaySrc={
          'https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=5'
        }
        src={'https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}
      />
    </div>
  );
}

export default App;
