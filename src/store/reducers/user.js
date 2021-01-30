import * as actions from "../actions/actionTypes";

const initialState = {
  user: undefined,
};

// Return the state
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USER:
      const { user } = action;
      return { ...state, user };
    case actions.GET_USER:
      return state;
    default:
      return state;
  }
};
