import { RECEIVE_MEAL_INFO } from "../actions/meal_actions";

const mealplansReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MEAL_INFO:
      newState.currentMeal = action.meal;
      return newState;
    default:
      return state;
  }
};

export default mealplansReducer;
