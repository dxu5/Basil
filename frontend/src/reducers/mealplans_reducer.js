import { RECEIVE_MEAL_PLAN } from "../actions/mealplan_actions";

const _nullState = {
  currentMealplan: undefined,
  prevMealplans: [],
  testMealplan: undefined,
};

const mealplansReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MEAL_PLAN:
      newState.testMealplan = action.mealplan;
      return newState;
    default:
      return state;
  }
};

export default mealplansReducer;
