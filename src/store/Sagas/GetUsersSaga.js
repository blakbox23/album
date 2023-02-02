import {
  put, call, takeLatest, all,
} from 'redux-saga/effects';
import { fetchUsersSuccess, FETCH_USERS } from '../Actions/UsersActions';
import { api } from '../Api';
import { errorToast } from '../../components/Toast';

function* workGetUsersSaga() {
  try {
    const response = yield call(api.getUsers);

    yield put(
      fetchUsersSuccess({
        users: response,
      }),
    );
  } catch (e) {
    errorToast(e.message);
  }
}

function* getUsersSaga() {
  yield all([takeLatest(FETCH_USERS, workGetUsersSaga)]);
}

export default getUsersSaga;
