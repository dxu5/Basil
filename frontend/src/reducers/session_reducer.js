import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
} from "../actions/session_actions";
import { 
  RECEIVE_COMPLETED_MEAL
} from "../actions/user_actions";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
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
          completedMeals: action.currentUser.completedMeals
        },
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined,
      };
    case RECEIVE_COMPLETED_MEAL:
      nextState.user.completedMeals = action.completedMeals
      return nextState;
    default:
      return state;
  }
};

export default SessionReducer;
