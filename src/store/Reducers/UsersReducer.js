import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ALBUMS,
  FETCH_USER_ALBUMS_SUCCESS,
} from "../Actions/UsersActions";

const initialState = {
  pending: false,
  error: null,
  users: [],
  user: null,
  userAlbums: []
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        pending: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload.users,
        error: null,
      };

    case FETCH_USER:
      return {
        ...state,
        pending: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload.user,
        error: null,
      };


      case FETCH_USER_ALBUMS:
      return {
        ...state,
        pending: true,
      };

    case FETCH_USER_ALBUMS_SUCCESS:
      return {
        ...state,
        pending: false,
        userAlbums: action.payload.userAlbums,
        error: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default UsersReducer;
