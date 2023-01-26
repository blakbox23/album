import { FETCH_USERS, FETCH_USERS_SUCCESS } from "../Actions/UsersActions";

const initialState = {
    pending: false,
    error: null,
    users: [],
  };


  const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS:
          return {
              ...state,
              pending: true
          };

      case FETCH_USERS_SUCCESS: 
      console.log(" action.payload.users, Reducer")
      console.log( action.payload.users)
        return {
          ...state,
          pending: false,
          users: action.payload.users,
          error: null
        };


      default:
        console.log("NO action selected")
        return {
            ...state
        };
    }
}

export default UsersReducer