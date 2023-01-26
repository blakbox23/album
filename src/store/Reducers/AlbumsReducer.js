import { FETCH_ALBUMS, FETCH_ALBUMS_SUCCESS } from "../Actions/AlbumsActions";

const initialState = {
    pending: false,
    error: null,
    albums: [],
  };


  const AlbumsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ALBUMS:
          return {
              ...state,
              pending: true
          };

      case FETCH_ALBUMS_SUCCESS: 

        return {
          ...state,
          pending: false,
          albums: action.payload.albums,
          error: null
        };


      default:
        return {
            ...state
        };
    }
}

export default AlbumsReducer