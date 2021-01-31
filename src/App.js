import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, getUser } from "./store/actions/actionCreator";

function App() {
  const count = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);

  return <div className="App"></div>;
}

export default App;
