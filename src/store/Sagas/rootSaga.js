import getUsersSaga from "./GetUsersSaga";
import getAlbumsSaga from "./GetAlbumsSaga";
import { fork, all } from 'redux-saga/effects';


export default function* rootSaga() {
  yield all([fork(getUsersSaga), fork(getAlbumsSaga)
  ]);
}