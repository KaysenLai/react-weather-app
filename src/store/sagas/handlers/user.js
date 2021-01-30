import { call, put } from "redux-saga/effects";
import { requestGetUser } from "../requests/user";
import { setUser } from "../../actions/actionCreator";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (e) {
    console.log(e);
  }
}
