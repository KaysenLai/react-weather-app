import { STORE_THEME_COLOR } from '../actions/actionTypes';
import { getThemeColor } from '../sagas/utils/color';

const initialState = {
  primaryColor: '#4D4D4D',
  secondColor: '#B2B2B2',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_THEME_COLOR:
      return getThemeColor(action.payload);
    default:
      return state;
  }
};
