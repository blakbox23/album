export const FETCH_PHOTO = "FETCH_PHOTO";
export const FETCH_PHOTO_SUCCESS = "FETCH_PHOTO_SUCCESS";

export const fetchPhoto = (payload) => ({
    type: FETCH_PHOTO,
    payload,
  });
  export const fetchPhotoSuccess = (payload) => ({
    type: FETCH_PHOTO_SUCCESS,
    payload,
  });