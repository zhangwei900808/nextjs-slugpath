import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import { actionTypes, changename_success } from "./actions";

function* changename() {
  try {
    const res = yield fetch("https://jsonplaceholder.typicode.com/users");
    const data = yield res.json();
    yield put(changename_success());
  } catch (err) {
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.CHANGENAME, changename)]);
}

export default rootSaga;
