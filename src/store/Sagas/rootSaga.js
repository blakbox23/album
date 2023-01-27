import getUsersSaga from "./GetUsersSaga";
import getAlbumsSaga from "./GetAlbumsSaga";
import getUserSaga from "./GetUserSaga";
import getUserAlbumsSaga from "./GetUserAlbumsSaga";
import { fork, all } from 'redux-saga/effects';


export default function* rootSaga() {
  yield all([fork(getUsersSaga), fork(getAlbumsSaga), fork(getUserSaga), fork(getUserAlbumsSaga)
  ]);
}