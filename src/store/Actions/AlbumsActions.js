export const FETCH_ALBUMS = "FETCH_ALBUMS";
export const FETCH_ALBUMS_SUCCESS = "FETCH_ALBUMS_SUCCESS";

export const fetchAlbums = () => ({
  type: FETCH_ALBUMS,
});
export const fetchAlbumsSuccess = (payload) => ({
  type: FETCH_ALBUMS_SUCCESS,
  payload,
});
