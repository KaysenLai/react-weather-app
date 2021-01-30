import { takeLatest } from "redux-saga/effects";
import { GET_USER } from "../actions/actionTypes";
import { handleGetUser } from "./handlers/user";

// 在后台监听
export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
