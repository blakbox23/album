import { fork, all } from 'redux-saga/effects';
import getUsersSaga from './GetUsersSaga';
import getAlbumsSaga from './GetAlbumsSaga';
import getUserSaga from './GetUserSaga';
import getUserAlbumsSaga from './GetUserAlbumsSaga';
import getAlbumSaga from './GetAlbumSaga';
import getPhotoSaga from './GetPhotoSaga';
import editPhotoSaga from './EditPhotoTitleSaga';

export default function* rootSaga() {
  yield all([
    fork(getUsersSaga),
    fork(getAlbumsSaga),
    fork(getUserSaga),
    fork(getUserAlbumsSaga),
    fork(getAlbumSaga),
    fork(getPhotoSaga),
    fork(editPhotoSaga),

  ]);
}
