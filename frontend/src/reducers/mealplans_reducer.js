import {
  RECEIVE_MEAL_PLAN,
  RECEIVE_NEW_MEAL_PLAN,
} from "../actions/mealplan_actions";
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
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
    case RECEIVE_USER_LOGOUT:
      return _nullState;
    default:
      return state;
  }
};

export default mealplansReducer;
