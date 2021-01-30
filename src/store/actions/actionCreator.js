import * as actions from "./actionTypes";

export const increment = () => ({
  type: actions.INCREMENT,
});

export const decrement = () => ({
  type: actions.DECREMENT,
});

export const getUser = () => ({
  type: actions.GET_USER,
});

export const setUser = (user) => ({
  type: actions.SET_USER,
  user,
});
