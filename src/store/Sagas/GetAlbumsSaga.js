import { put, call, takeLatest, all } from 'redux-saga/effects';
import { fetchAlbumsSuccess, FETCH_ALBUMS } from '../Actions/AlbumsActions'
import { api } from '../Api'

function* workGetAlbumsSaga(){
    
  try {
    const response = yield call(api.getAlbums);
    console.log('api response')
    console.log(response)
    yield put(
        fetchAlbumsSuccess({
          albums: response
        })
        )
 } catch (e) {
  console.log(e.message)
 }
}


function* getAlbumsSaga() {
    yield all([takeLatest(FETCH_ALBUMS, workGetAlbumsSaga)])
}

export default getAlbumsSaga;