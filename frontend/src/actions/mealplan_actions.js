import * as MealplanAPIUtil from "../util/spoonacular_api_util";

export const RECEIVE_MEAL_PLAN = "RECEIVE_MEAL_PLAN";

export const receiveMealPlan = (mealplan) => {
  return {
    type: RECEIVE_MEAL_PLAN,
    mealplan,
  };
};

export const getMealPlans = (details) => (dispatch) => {
  return MealplanAPIUtil.getWeeklyMealPlan(details).then((res) => {
    dispatch(receiveMealPlan(res.data));
  });
};