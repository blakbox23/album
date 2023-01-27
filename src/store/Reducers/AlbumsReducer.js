import {
  FETCH_ALBUMS,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUM,
  FETCH_ALBUM_SUCCESS,
} from "../Actions/AlbumsActions";

const initialState = {
  pending: false,
  error: null,
  albums: [],
  album: undefined
};

const AlbumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return {
        ...state,
        pending: true,
      };

    case FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        pending: false,
        albums: action.payload.albums,
        error: null,
      };

      case FETCH_ALBUM:
      return {
        ...state,
        pending: true,
      };

    case FETCH_ALBUM_SUCCESS:
      return {
        ...state,
        pending: false,
        album: action.payload.album,
        error: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default AlbumsReducer;
