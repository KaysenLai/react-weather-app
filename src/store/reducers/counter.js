import { INCREMENT } from "../actions/actionTypes";

const initialState = {
  count: 0,
};

export const increment = () => ({
  type: INCREMENT,
});

// Return the state
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
