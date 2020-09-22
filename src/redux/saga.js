import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import { actionTypes } from "./actions";

function* changename() {
  try {
    const res = yield fetch("https://jsonplaceholder.typicode.com/users");
    const data = yield res.json();
    console.log("data = ", data);
    // yield put(loadDataSuccess(data));
  } catch (err) {
    // yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.CHANGENAME, changename)]);
}

export default rootSaga;
