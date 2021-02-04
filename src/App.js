import React, { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import MainNav from './components/MainNav/MainNav';
import Weather from './pages/Weather/Weather';
import { asyncRequestAllData } from './store/sagas/actions/asyncActionCreator';

function App() {
  const store = useStore();
  const dispatch = useDispatch();

  useEffect(() => {
    store.dispatch(asyncRequestAllData());
  }, [dispatch]);

  return (
    <div>
      <MainNav />
      <Weather />
    </div>
  );
}

export default App;
