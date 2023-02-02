export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ALBUMS = 'FETCH_USER_ALBUMS';
export const FETCH_USER_ALBUMS_SUCCESS = 'FETCH_USER_ALBUMS_SUCCESS';

export const fetchUsers = () => ({
  type: FETCH_USERS,
});
export const fetchUsersSuccess = (payload) => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUser = (payload) => ({
  type: FETCH_USER,
  payload,
});
export const fetchUserSuccess = (payload) => ({
  type: FETCH_USER_SUCCESS,
  payload,
});

export const fetchUserAlbums = (payload) => ({
  type: FETCH_USER_ALBUMS,
  payload,
});
export const fetchUserAlbumsSuccess = (payload) => ({
  type: FETCH_USER_ALBUMS_SUCCESS,
  payload,
});
