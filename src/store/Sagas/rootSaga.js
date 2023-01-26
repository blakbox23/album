import getUsersSaga from "./GetUsersSaga";
import { fork, all } from 'redux-saga/effects';


export default function* rootSaga() {
  yield all([fork(getUsersSaga)
  ]);
}