export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUM = 'FETCH_ALBUM';
export const FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS';

export const fetchAlbums = () => ({
  type: FETCH_ALBUMS,
});
export const fetchAlbumsSuccess = (payload) => ({
  type: FETCH_ALBUMS_SUCCESS,
  payload,
});

export const fetchAlbum = (payload) => ({
  type: FETCH_ALBUM,
  payload,
});
export const fetchAlbumSuccess = (payload) => ({
  type: FETCH_ALBUM_SUCCESS,
  payload,
});
