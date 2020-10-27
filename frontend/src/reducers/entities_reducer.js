import { combineReducers } from "redux";
import mealplansReducer from "./mealplans_reducer.js";

export default combineReducers({
  mealplans: mealplansReducer,
});
