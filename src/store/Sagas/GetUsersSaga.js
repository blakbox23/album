import { put, call, takeLatest, all } from 'redux-saga/effects';
import { fetchUsersSuccess, FETCH_USERS } from '../Actions/UsersActions'
import { api } from '../Api'

function* workGetUsersSaga(){
    
  try {
    const response = yield call(api.getUsers);
    console.log('api response')
    console.log(response)
    yield put(
        fetchUsersSuccess({
          users: response
        })
        )
 } catch (e) {
  console.log(e.message)
 }
}


function* getUsersSaga() {
    yield all([takeLatest(FETCH_USERS, workGetUsersSaga)])
}

export default getUsersSaga;