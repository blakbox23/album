import {
  FETCH_PHOTO, FETCH_PHOTO_SUCCESS, EDIT_PHOTO, EDIT_PHOTO_SUCCESS,
} from '../Actions/PhotosActions';

const initialState = {
  pending: false,
  error: null,
  photo: undefined,
};

const PhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTO:
      return {
        ...state,
        pending: true,
      };

    case FETCH_PHOTO_SUCCESS:
      return {
        ...state,
        pending: false,
        photo: action.payload.photo,
        error: null,
      };

    case EDIT_PHOTO:
      return {
        ...state,
        pending: true,
      };

    case EDIT_PHOTO_SUCCESS:
      return {
        ...state,
        pending: false,
        photo: action.payload.photo,
        error: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default PhotosReducer;
