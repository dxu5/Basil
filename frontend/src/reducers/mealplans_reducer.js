import {
  RECEIVE_MEAL_PLAN,
  RECEIVE_NEW_MEAL_PLAN,
} from "../actions/mealplan_actions";
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_INFO_HOME,
} from "../actions/session_actions";

const _nullState = {
  currentMealplan: undefined,
  prevMealplans: [],
  prospectiveMealplan: undefined,
  currentMealplanStartTime: undefined,
};

const mealplansReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MEAL_PLAN:
      newState.prospectiveMealplan = action.mealplan;
      return newState;
    case RECEIVE_CURRENT_USER:
      if (action.currentUser.currentMealplan) {
        newState.currentMealplan = JSON.parse(
          action.currentUser.currentMealplan
        );
      }
      if (action.currentUser.currentMealplanStartTime) {
        newState.currentMealplanStartTime =
          action.currentUser.currentMealplanStartTime;
      }
      return newState;
    case RECEIVE_NEW_MEAL_PLAN:
      if (action.mealplan.currentMealplan) {
        newState.currentMealplan = JSON.parse(action.mealplan.currentMealplan);
      }
      if (action.mealplan.currentMealplanStartTime) {
        newState.currentMealplanStartTime =
          action.mealplan.currentMealplanStartTime;
      }
      return newState;
    case RECEIVE_USER_INFO_HOME:
      if (action.user.currentMealplan) {
        newState.currentMealplan = JSON.parse(action.user.currentMealplan);
      }
      if (action.user.currentMealplanStartTime) {
        newState.currentMealplanStartTime =
          action.user.currentMealplanStartTime;
      }
      return newState;
    case RECEIVE_USER_LOGOUT:
      return _nullState;
    default:
      return state;
  }
};

export default mealplansReducer;
