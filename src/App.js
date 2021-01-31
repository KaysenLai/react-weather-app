import React, { useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';

import { REQUEST_CURRENT_WEATHER, REQUEST_HOURLY_WEATHER } from './store/sagas/asyncActionTypes';

function App() {
  const store = useStore();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUser());
  // }, [dispatch]);
  const action = (type) => store.dispatch({ type });

  useEffect(() => {
    action(REQUEST_HOURLY_WEATHER);
  }, [dispatch]);

  // const user = useSelector((state) => state.user.user);

  return <div className="App">ddd</div>;
}

export default App;
