import {
  put, call, takeLatest, all,
} from 'redux-saga/effects';
import { fetchAlbumSuccess, FETCH_ALBUM } from '../Actions/AlbumsActions';
import { api } from '../Api';
import { errorToast } from '../../components/Toast';

function* workGetAlbumSaga(action) {
  try {
    const response = yield call(api.getAlbum, action.payload);

    yield put(
      fetchAlbumSuccess({
        album: response.album,
        photos: response.photos,
      }),
    );
  } catch (e) {
    errorToast(e.message);
  }
}

function* getAlbumSaga() {
  yield all([takeLatest(FETCH_ALBUM, workGetAlbumSaga)]);
}

export default getAlbumSaga;
