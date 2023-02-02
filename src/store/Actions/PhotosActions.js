export const FETCH_PHOTO = 'FETCH_PHOTO';
export const FETCH_PHOTO_SUCCESS = 'FETCH_PHOTO_SUCCESS';

export const EDIT_PHOTO = 'EDIT_PHOTO';
export const EDIT_PHOTO_SUCCESS = 'EDIT_PHOTO_SUCCESS';

export const fetchPhoto = (payload) => ({
  type: FETCH_PHOTO,
  payload,
});
export const fetchPhotoSuccess = (payload) => ({
  type: FETCH_PHOTO_SUCCESS,
  payload,
});

export const editPhoto = (payload) => ({
  type: EDIT_PHOTO,
  payload,
});
export const editPhotoSuccess = (payload) => ({
  type: EDIT_PHOTO_SUCCESS,
  payload,
});
