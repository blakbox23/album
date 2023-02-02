import {
  put, call, takeLatest, all,
} from 'redux-saga/effects';
import { fetchUserAlbumsSuccess, FETCH_USER_ALBUMS } from '../Actions/UsersActions';
import { api } from '../Api';
import { errorToast } from '../../components/Toast';

function* workGetUserAlbumsSaga(action) {
  try {
    const response = yield call(api.getUserAlbums, action.payload);

    yield put(
      fetchUserAlbumsSuccess({
        userAlbums: response,
      }),
    );
  } catch (e) {
    errorToast(e.message);
  }
}

function* getUserAlbumsSaga() {
  yield all([takeLatest(FETCH_USER_ALBUMS, workGetUserAlbumsSaga)]);
}

export default getUserAlbumsSaga;
