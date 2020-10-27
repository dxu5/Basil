import * as MealplanAPIUtil from "../util/spoonacular_api_util";

export const RECEIVE_MEAL_PLAN = "RECEIVE_MEAL_PLAN";
export const RECEIVE_MEAL_INFO = "RECEIVE_MEAL_INFO";

export const receiveMealPlan = (mealplan) => {
  return {
    type: RECEIVE_MEAL_PLAN,
    mealplan,
  };
};

export const receiveMealInfo = (meal) => {
  return {
    type: RECEIVE_MEAL_INFO,
    meal,
  };
};
