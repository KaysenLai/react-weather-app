import { createStore, applyMiddleware, compose } from 'redux';
// import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import reducers from './reducers';
import { watcherSaga } from './sagas/rootSaga';

let composeEnhancers = compose;
let reduxSagaMonitorOptions = {};
let initialState = {};

if (process.env.NODE_ENV === 'development' && typeof window === 'object') {
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

  // if (window.__SAGA_MONITOR_EXTENSION__) {
  //   reduxSagaMonitorOptions = {
  //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
  //   };
  // }
}

const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

// Create the store with two middlewares
// 1. sagaMiddleware: Makes redux-sagas work
// 2. routerMiddleware: Syncs the location/URL path to the state
// const middlewares = [sagaMiddleware, routerMiddleware(history)];
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

const store = createStore(reducers, initialState, composeEnhancers(...enhancers));

sagaMiddleware.run(watcherSaga);

export default store;
