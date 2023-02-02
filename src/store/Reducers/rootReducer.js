import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';
import AlbumsReducer from './AlbumsReducer';
import PhotosReducer from './PhotoReducer';

const rootReducer = combineReducers({
  users: UsersReducer,
  albums: AlbumsReducer,
  photo: PhotosReducer,
});

export default rootReducer;
