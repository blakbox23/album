import { put, call, takeLatest, all } from 'redux-saga/effects';
import { editPhotoSuccess, EDIT_PHOTO } from '../Actions/PhotosActions'
import { api } from '../Api'

function* workEditPhotoSaga(action){

  try {
    const response = yield call(api.editPhoto, action.payload);

    yield put(
        editPhotoSuccess({
          photo: response
        })
        )
 } catch (e) {
  console.log(e.message)
 }
}


function* editPhotoSaga() {
    yield all([takeLatest(EDIT_PHOTO, workEditPhotoSaga)])
}

export default editPhotoSaga;