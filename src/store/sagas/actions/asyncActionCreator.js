import * as actions from './asyncActionTypes';

export const asyncSearchCity = (location) => ({
  type: actions.REQUEST_SEARCH_CITY,
  payload: location,
});
