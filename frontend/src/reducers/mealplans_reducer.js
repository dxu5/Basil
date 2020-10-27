import { RECEIVE_MEAL_PLAN } from "../actions/mealplan_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

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
      newState.currentMealplan = action.currentMealplan;
      newState.currentMealplanStartTime = action.currentMealplanStartTime;
      return newState;
    default:
      return state;
  }
};

export default mealplansReducer;
