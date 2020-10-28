import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
} from "../actions/session_actions";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const SessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: {
          exp: action.currentUser.exp,
          iat: action.currentUser.iat,
          id: action.currentUser.id,
          username: action.currentUser.username,
        },
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined,
      };
    default:
      return state;
  }
};

export default SessionReducer;
