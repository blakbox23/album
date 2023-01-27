import { put, call, takeLatest, all } from 'redux-saga/effects';
import { fetchUserSuccess, FETCH_USER } from '../Actions/UsersActions'
import { api } from '../Api'

function* workGetUserSaga(action){

  try {
    const response = yield call(api.getUser, action.payload);

    yield put(
        fetchUserSuccess({
          user: response
        })
        )
 } catch (e) {
  console.log(e.message)
 }
}


function* getUserSaga() {
    yield all([takeLatest(FETCH_USER, workGetUserSaga)])
}

export default getUserSaga;