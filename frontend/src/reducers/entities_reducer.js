import { combineReducers } from "redux";
import mealplansReducer from "./mealplans_reducer.js";
import mealsReducer from "./meals_reducer";

export default combineReducers({
  mealplans: mealplansReducer,
  meals: mealsReducer,
});
