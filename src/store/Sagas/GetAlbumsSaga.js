import {
  put, call, takeLatest, all,
} from 'redux-saga/effects';
import { fetchAlbumsSuccess, FETCH_ALBUMS } from '../Actions/AlbumsActions';
import { api } from '../Api';
import { errorToast } from '../../components/Toast';

function* workGetAlbumsSaga() {
  try {
    const response = yield call(api.getAlbums);

    yield put(
      fetchAlbumsSuccess({
        albums: response,
      }),
    );
  } catch (e) {
    errorToast(e.message);
  }
}

function* getAlbumsSaga() {
  yield all([takeLatest(FETCH_ALBUMS, workGetAlbumsSaga)]);
}

export default getAlbumsSaga;
