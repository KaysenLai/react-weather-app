import React, { useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';

import {
  REQUEST_CURRENT_WEATHER,
  REQUEST_DAILY_WEATHER,
  REQUEST_HOURLY_WEATHER,
  REQUEST_ONE_IMG,
  REQUEST_SEARCH_CITY,
} from './store/sagas/asyncActionTypes';

function App() {
  const store = useStore();
  const dispatch = useDispatch();
  const action = (type) => store.dispatch({ type });

  useEffect(() => {
    // action(REQUEST_CURRENT_WEATHER);
    // action(REQUEST_HOURLY_WEATHER);
    // action(REQUEST_DAILY_WEATHER);
    // action(REQUEST_SEARCH_CITY);
    action(REQUEST_ONE_IMG);
  }, [dispatch]);

  // const user = useSelector((state) => state.user.user);

  return <div className="App">ddd</div>;
}

export default App;
