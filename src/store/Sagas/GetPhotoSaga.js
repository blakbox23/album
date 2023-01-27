import { put, call, takeLatest, all } from 'redux-saga/effects';
import { fetchPhotoSuccess, FETCH_PHOTO } from '../Actions/PhotosActions'
import { api } from '../Api'

function* workGetPhotoSaga(action){

  try {
    const response = yield call(api.getPhoto, action.payload);

    yield put(
        fetchPhotoSuccess({
          photo: response
        })
        )
 } catch (e) {
  console.log(e.message)
 }
}


function* getPhotoSaga() {
    yield all([takeLatest(FETCH_PHOTO, workGetPhotoSaga)])
}

export default getPhotoSaga;