
import { combineReducers } from "redux";
import UsersReducer from './UsersReducer';
import AlbumsReducer from './AlbumsReducer';

const rootReducer = combineReducers({
  users: UsersReducer,
  albums: AlbumsReducer,
});


export default rootReducer;